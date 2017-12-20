import { Component, OnInit } from '@angular/core';
import { Room } from "../room";
import { RoomService } from "../room.service";
import { AuthService } from '../auth.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import {IMyDrpOptions, IMyDate}  from 'mydaterangepicker';
import { ReservationService } from '../reservation.service';





@Component({
  selector: 'room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})

export class RoomListComponent implements OnInit {

  selectedStatus: string = '';
  rooms: Room[] = [];
  dateRange: String;

  currentDate = new Date();
  myCurrentDate: IMyDate = { 
      year:this.currentDate.getFullYear(),
     month: this.currentDate.getMonth(),
      day : this.currentDate.getDay()
    }

  myDateRangePickerOptions: IMyDrpOptions = {
    dateFormat: 'yyyy-mm-dd',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    inline: false,
    disableUntil: this.myCurrentDate
  
};

  constructor(
    private roomService: RoomService,
    private reservationService: ReservationService,
    private authService: AuthService 
  ) { }

  

  refreshGridData(event){
    console.log("refreshGridData");
    
    this.dateRange = event.formatted.replace(" - ",",");

    this.roomService.getRooms(this.dateRange)
    .subscribe(r => {
      this.rooms = r;
    });
    

  }
  ngOnInit() {
  }

  startReservation(roomid: Number){
    if(confirm("Biztosan le szeretné foglalni a "+roomid+" azonosítójú szobát?")){
      var checkin = this.dateRange.substr(0,10);
      var checkout = this.dateRange.substr(11,10);
      var userid = this.authService.user.id;
      this.reservationService.makeReservation({checkin: checkin, checkout: checkout, room: {id: roomid}, user: {id: userid}})
      .subscribe();
    }

  }

}

