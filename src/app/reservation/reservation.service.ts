import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private readonly apiUrl = "http://localhost:3001"

  constructor(private readonly http:HttpClient) { }

  getAllReservations():Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.apiUrl+"/reservations");
  }

  addReservation(reservation:Reservation):Observable<void>{
    return this.http.post<void>(this.apiUrl+"/reservations", reservation);
  }

  updateReservation(id:string, reservation:Reservation):Observable<void>{
    return this.http.put<void>(this.apiUrl+"/reservations/"+id, reservation);
  }

  deleteReservation(id:string):Observable<void>{
    return this.http.delete<void>(this.apiUrl+"/reservations/"+id);
  }

  getReservationById(id:string):Observable<Reservation>{
    return this.http.get<Reservation>(this.apiUrl+"/reservations/"+id);
  }
}
