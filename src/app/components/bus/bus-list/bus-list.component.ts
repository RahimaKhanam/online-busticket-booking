import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bus } from 'src/app/models/bus.model';
import { Cities } from 'src/app/models/cities.model';
import { BusService } from 'src/app/services/bus.service';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  allBus: Bus[] = [];
  allCities: Cities[] = [];
  @ViewChild('myForm', { static: true }) myForm !: NgForm;

  constructor(private busService: BusService,
    private citiesService: CitiesService,
    private router: Router) { }

  ngOnInit(): void {
    this.citiesService.fetchAllCities().subscribe({
      next: (response) => { this.allCities = response },
      error: (err) => { console.log(err) }
    });

    this.fetchAllBuses();
  }

  fetchAllBuses(){
    this.busService.fetchAllBus().subscribe({
      next: (response) => { this.allBus = response },
      error: (err) => { console.log(err) }
    })
  }

  viewRoutes(eachBusId: number) {
    this.router.navigate(['bus-route-list', eachBusId])
  }

  filterData(form: any) {
    let formData = form.form.value;
    console.log(formData);
    const allBuses = this.allBus;
    this.allBus = [];
    allBuses.forEach((element: any) => {
      if (formData.leaving == element.busFromId && formData.going == element.busToId){
        console.log(element);
        this.allBus.push(element)
      }
    });
  }
  resetFilter(){
    this.myForm.resetForm();
    this.fetchAllBuses();
  }
}
