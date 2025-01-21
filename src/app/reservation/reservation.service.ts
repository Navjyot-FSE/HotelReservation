import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations:Reservation[] = [];

  constructor() { 
    let reservation = localStorage.getItem("reservation")
    this.reservations = reservation ? JSON.parse(reservation) : [];
  }

  getAllReservations():Reservation[]{
    return this.reservations;
  }

  addReservation(reservation:Reservation){
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    localStorage.setItem("reservation", JSON.stringify(this.reservations));
  }

  updateReservation(id:string, reservation:Reservation){
    const index = this.reservations.findIndex(res => res.id === id);
    reservation.id = id;
    this.reservations[index] = reservation;
    localStorage.setItem("reservation", JSON.stringify(this.reservations));
  }

  deleteReservation(id:string){
    const index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index, 1);
    localStorage.setItem("reservation", JSON.stringify(this.reservations));
  }

  getReservationById(id:string):Reservation | undefined{
    return this.reservations.find(reservation => reservation.id === id);
  }
}
