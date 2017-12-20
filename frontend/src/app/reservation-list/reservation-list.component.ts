import { Component, OnInit } from '@angular/core';
import { Reservation } from "../reservation";
import { ReservationService } from "../reservation.service";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  selectedStatus: string = '';
  reservations: Reservation[] = [];
  

  constructor(
    private reservationService: ReservationService,
    private authService: AuthService,
    private router: Router
  ) { }

 

  ngOnInit() {
   
  }

}
