import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
  standalone:false
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder, 
    private reservationService:ReservationService,
    private router: Router,
    private activatedRoute:ActivatedRoute
  ) { 

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumer: ['', Validators.required]
    });

    let id = this.activatedRoute.snapshot.paramMap.get("id");

    if(id)
    {
      let reservation = this.reservationService.getReservationById(id);
      
      if(reservation)
        this.reservationForm.patchValue(reservation);
    }
  }

  onSubmit(): void {
    if(this.reservationForm.valid)
    {
      let reservationDetails:Reservation = this.reservationForm.value;
      let id = this.activatedRoute.snapshot.paramMap.get("id");
      if(id)
        this.reservationService.updateReservation(id, reservationDetails);
      else
        this.reservationService.addReservation(reservationDetails);
      this.router.navigate(["/list"]);
    }
  }
}
