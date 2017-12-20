import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from "../auth.service";
import {Guest} from '../guest'
import { ReservationService } from "../reservation.service";

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService, private reservationService: ReservationService) { }
  message: String;
  model: Guest = new Guest();
  guests = new Array<Guest>();

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.refreshGridData(); // ez mehet rögtön
   });
  }
  async submit(f) {
    if (f.invalid) {
      return;
    }
    try {
      console.log('Try to add guest' + this.model.firstName +" "+  this.model.lastName);
     // this.model.reservation = {id: this.id};
      var fakeModel = {firstName: this.model.firstName, lastName: this.model.lastName, reservation:  {id: this.id}}
      this.reservationService.addGuest(fakeModel).subscribe();
      this.refreshGridData();
      console.log('success')
     // this.router.navigate([this.authService.redirectUrl]);
    }
    catch(e) {
      this.message = 'Registration failed';
      console.log(e);
    }
  }

  refreshGridData(){
    this.reservationService.getGuests(this.id).subscribe(value=> this.guests = value);
  }
}
