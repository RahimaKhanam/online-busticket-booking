import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from '../models/bus.model';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  baseUrl: string = "http://localhost:3000/bus";

  constructor(private httpClient: HttpClient) { }

  fetchAllBus(): Observable<Bus[]>{
    return this.httpClient.get<Bus[]>(this.baseUrl);
  }

  fetchABus(id: number): Observable<Bus>{
    return this.httpClient.get<Bus>(this.baseUrl+'/'+id);
  }
}
