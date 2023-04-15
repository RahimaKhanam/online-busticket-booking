import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cities } from '../models/cities.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  baseUrl: string = "http://localhost:3000/cities"

  constructor(private httpClient: HttpClient) { }

  fetchAllCities(): Observable<Cities[]>{
    return this.httpClient.get<Cities[]>(this.baseUrl);
  }
}
