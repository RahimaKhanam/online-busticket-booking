import { Component, OnInit } from '@angular/core';
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
  
  constructor(private busService: BusService, 
              private citiesService: CitiesService,
              private router: Router) { }

  ngOnInit(): void {
    this.citiesService.fetchAllCities().subscribe({
      next: (response)=>{this.allCities = response},
      error: (err)=>{console.log(err)}
    });


    this.busService.fetchAllBus().subscribe({
      next: (response)=>{ this.allBus = response },
      error: (err)=>{console.log(err)}
    })
  }

  viewRoutes(eachBusId: number){
    this.router.navigate(['bus-route-list', eachBusId])
  }
}
