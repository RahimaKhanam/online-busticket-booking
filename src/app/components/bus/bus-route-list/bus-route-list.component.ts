import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusRoutes } from 'src/app/models/bus-routes.model';
import { Bus } from 'src/app/models/bus.model';
import { Cities } from 'src/app/models/cities.model';
import { BusRoutesService } from 'src/app/services/bus-routes.service';
import { BusService } from 'src/app/services/bus.service';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-bus-route-list',
  templateUrl: './bus-route-list.component.html',
  styleUrls: ['./bus-route-list.component.css']
})
export class BusRouteListComponent implements OnInit {
  allCities: Cities[] = [];
  allBusRoutes: BusRoutes[] = [];
  viewBus: Bus = {
    id: 0,
    busName: '',
    busTicketFare: 0,
    busFromId: 0,
    busToId: 0,
    busTotalSeats: 0,
    busImageUrl: [] 
  }
  constructor(private activatedRoute: ActivatedRoute, 
              private busRoutesService: BusRoutesService,
              private busService: BusService,
              private citiesService: CitiesService,
              private router: Router) { }

  ngOnInit(): void {
    this.citiesService.fetchAllCities().subscribe({
      next: (response)=>{this.allCities = response},
      error: (err)=>{console.log(err)}
    });

    let busId = this.activatedRoute.snapshot.paramMap.get("bid");

    if(busId!=null){
      this.busRoutesService.fetchBusRoutesByBusId(+busId).subscribe({
        next: (response)=>{
          this.allBusRoutes = response;
          if(busId!=null){
            this.busService.fetchABus(+busId).subscribe({
              next: (resp)=>{ this.viewBus = resp },
              error: (err)=>{  console.log(err) }
            })
          }
        },
        error: (err)=>{console.log(err)}
      });
    }
    
  }

  viewSeats(routeId: number){
    this.router.navigate(['bus-seat-view', routeId]);
  }

}
