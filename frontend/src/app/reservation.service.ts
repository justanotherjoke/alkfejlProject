import { Injectable } from '@angular/core';
import { Reservation } from "./reservation";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Guest } from "./guest"

@Injectable()
export class ReservationService {

  constructor(private http: HttpClient) { }

  reservations: Reservation[];
  
  getUserReservations(): Observable<any[]> {
    return this.http.get<any[]>('/api/reservation/reservations/all')
   }

  makeReservation(guest: any):Observable<any>{
    return this.http.post("/api/reservation/createreservation", guest);
  }

  addGuest(guest){
    return this.http.post("/api/reservation/guest", guest);
  }

  getGuests(reservationId: Number): Observable<Guest[]>{
    return this.http.get<Guest[]>("/api/reservation/guest/all/"+reservationId);
  }
}
