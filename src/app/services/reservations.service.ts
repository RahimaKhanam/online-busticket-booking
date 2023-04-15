import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservations } from '../models/reservations.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  baseUrl: string = "http://localhost:3000/reservations";

  constructor(private httpClient: HttpClient) { }

  addReservation(reserveDetails: Reservations): Observable<Reservations>{
    return this.httpClient.post<Reservations>(this.baseUrl, reserveDetails);
  }

  fetchAReservation(resId: number): Observable<Reservations>{
    return this.httpClient.get<Reservations>(this.baseUrl+'/'+resId);
  }
}
