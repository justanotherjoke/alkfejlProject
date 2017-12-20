import { Component, OnInit } from '@angular/core';
import { ReservationService } from "../reservation.service";
import { Reservation } from '../reservation';


@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  reservations: Reservation[] = new Array<Reservation>();
  
  constructor(private reservationService: ReservationService) { 
  }

  ngOnInit() {
  }

}
