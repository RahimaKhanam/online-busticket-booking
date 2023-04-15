import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BusRoutes } from '../models/bus-routes.model';

@Injectable({
  providedIn: 'root'
})
export class BusRoutesService {

  baseUrl: string = "http://localhost:3000/bus-routes"

  constructor(private httpClient: HttpClient) { }

  fetchAllBusRoutes(): Observable<BusRoutes[]>{
    return this.httpClient.get<BusRoutes[]>(this.baseUrl);
  }

  fetchBusRoutesByBusId(busId: number): Observable<BusRoutes[]>{
    return this.httpClient.get<BusRoutes[]>(this.baseUrl).pipe<BusRoutes[]>(map((data)=>data.filter((eachBusRoute)=>eachBusRoute.busId==busId)));
  }

  fetchABusRoute(id: number): Observable<BusRoutes>{
    return this.httpClient.get<BusRoutes>(this.baseUrl+'/'+id);
  }

  updateBusRoute(updateRoute: BusRoutes): Observable<BusRoutes>{
    return this.httpClient.put<BusRoutes>(this.baseUrl+'/'+updateRoute.id, updateRoute);
  }
}
