import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReservationModule } from './reservation/reservation.module';
import { HomeModule } from './home/home.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReservationModule, HomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotel-booking';
}
