import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RoutingModule } from "./routing/routing.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MyDateRangePickerModule } from 'mydaterangepicker';


import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule,
          MatFormFieldModule, MatInputModule,
          MatButtonToggleModule
} from "@angular/material";

import { IssueService } from "./issue.service";
import { ReservationService } from "./reservation.service";
import { AuthService } from "./auth.service";
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { StatusFilterComponent } from './status-filter/status-filter.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from "./auth.guard";
import { LoginComponent } from './login/login.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomService } from "./room.service";
import { RegisterComponent } from './register/register.component';
import { GuestComponent } from './guest/guest.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    IssueListComponent,
    IssueFormComponent,
    IssueDetailComponent,
    StatusFilterComponent,
    IssueEditComponent,
    MenuComponent,
    LoginComponent,
    ReservationListComponent,
    RoomListComponent,
    RegisterComponent,
    GuestComponent
  ],
  imports: [
    MyDateRangePickerModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule, MatButtonModule,
    MatIconModule, MatMenuModule,
    MatButtonToggleModule,
    RoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [IssueService,ReservationService, AuthService,RoomService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
