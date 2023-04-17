import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusRoutes } from 'src/app/models/bus-routes.model';
import { Bus } from 'src/app/models/bus.model';
import { Cities } from 'src/app/models/cities.model';
import { Reservations } from 'src/app/models/reservations.model';
import { BusRoutesService } from 'src/app/services/bus-routes.service';
import { BusService } from 'src/app/services/bus.service';
import { CitiesService } from 'src/app/services/cities.service';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-bus-seat-view',
  templateUrl: './bus-seat-view.component.html',
  styleUrls: ['./bus-seat-view.component.css']
})
export class BusSeatViewComponent implements OnInit {
  color: string = '';
  selectedSeats: number[] = [];
  allCities: Cities[] = [];
  viewBusRoute: BusRoutes = {
    id: 0,
    busId: 0,
    busTravelDateTime: new Date(),
    coachType: '',
    busSeatsTaken: [],
  }
  viewBus: Bus = {
    id: 0,
    busName: '',
    busTicketFare: 0,
    busFromId: 0,
    busToId: 0,
    busTotalSeats: 0,
    busImageUrl: []
  }
  totalSeats: number[] = [];
  @ViewChild('closeModal') closeModal !: ElementRef;
  errorMsg :any;

  constructor(private busService: BusService,
    private busRoutesService: BusRoutesService,
    private citiesService: CitiesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private reservationService: ReservationsService) { }

  ngOnInit(): void {
    sessionStorage.clear();
    this.citiesService.fetchAllCities().subscribe({
      next: (response) => { this.allCities = response },
      error: (err) => { console.log(err) }
    });

    let busRouteId = this.activatedRoute.snapshot.paramMap.get("brid");

    if (busRouteId != null) {
      this.busRoutesService.fetchABusRoute(+busRouteId).subscribe({
        next: (response) => {
          this.viewBusRoute = response;
          this.busService.fetchABus(this.viewBusRoute.busId).subscribe({
            next: (resp) => {
              this.viewBus = resp;
              for (let i = 1; i <= this.viewBus.busTotalSeats; i++) {
                this.totalSeats.push(i);
              }
            },
            error: (err) => console.log(err)
          })

        },
        error: (err) => { console.log(err) }
      })
    }

  }

  seatDisplay(seat: number) {
    if (this.viewBusRoute.busSeatsTaken.findIndex((eachSeat) => eachSeat == seat) != -1) {
      // this means the seat is already taken
      this.color = "RED";
    } else if (this.selectedSeats.findIndex((eachSeat) => eachSeat == seat) != -1) {
      this.color = 'GREEN';
    } else {
      this.color = 'LIGHT';
    }
    return this.color;

  }

  addToSeatsSelected(seatNo: number) {
    // if that seat is found in the array
    if (this.selectedSeats.findIndex((eachSeat) => eachSeat == seatNo) != -1) {
      this.selectedSeats.splice(this.selectedSeats.findIndex((eachSeat) => eachSeat == seatNo), 1);
    }
    // if is it not found we push it to the array
    else {
      this.selectedSeats.push(seatNo);
    }
    this.seatDisplay(seatNo);
  }

  reserveTickets() {
    let userDetails = sessionStorage.getItem('userDetails');
    console.log(userDetails);
    // here we should reserve the ticket - similar to add student
    if(userDetails){
      let newReservation: Reservations = {
        id: 0,
        resBusRouteId: this.viewBusRoute.id,
        resSeatsTaken: this.selectedSeats
      }
  
      this.reservationService.addReservation(newReservation).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['reservation-success', response.id]);
        },
        error: (err) => console.log(err)
      })
    }
    else{
      this.errorMsg = 'Please save Passenger Details first'
    }
  }

  saveDetails(form: any){
    console.log(form.value);
    sessionStorage.setItem('userDetails', JSON.stringify(form.value));
    this.errorMsg = '';
    alert("Passenger Details saved!");
    this.closeModal.nativeElement.click();
  }
}
