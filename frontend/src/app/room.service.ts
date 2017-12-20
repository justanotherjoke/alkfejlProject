import { Injectable } from '@angular/core';
import { Room } from "./Room";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class RoomService {

  constructor(private http: HttpClient) { }

  Rooms: Room[];
  
  getRooms(dateRange: String): Observable<Room[]> {
    return this.http.get<Room[]>('/api/reservation/reservations/free/'+dateRange);
  }
}
