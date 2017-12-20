import { Component, OnInit, Input, Output, OnChanges,
  EventEmitter } from '@angular/core';
import { Reservation } from "../reservation";
import { RoomService } from "../room.service";
import { AuthService } from '../auth.service';
import { ReservationService } from '../reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnChanges {

  reservations: Reservation[] = [];
  constructor( private roomService: RoomService,
    private reservationService: ReservationService,
    private authService: AuthService,
    private router: Router
   ) { }

 ngOnInit(){
  this.reservationService.getUserReservations().subscribe(value=> this.reservations = value);
 }
 ngOnChanges(){

 }

 navigateToGuestPage(reservationid: Number){
   this.router.navigate(["reservations/"+reservationid]);
 }


  
}
