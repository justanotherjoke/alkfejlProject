import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }   from '@angular/router';

import { MainPageComponent } from "../main-page/main-page.component";
//import { IssueListComponent } from "../issue-list/issue-list.component";
import { ReservationListComponent } from "../reservation-list/reservation-list.component";
import { RoomListComponent } from "../room-list/room-list.component";
import { IssueDetailComponent } from "../issue-detail/issue-detail.component";
import { IssueFormComponent } from "../issue-form/issue-form.component";
import { IssueEditComponent } from "../issue-edit/issue-edit.component";
import { LoginComponent } from "../login/login.component";
import { GuestComponent } from "../guest/guest.component";
import { RegisterComponent } from "../register/register.component";
import { AuthGuard } from "../auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: MainPageComponent
  },
  {
    path: 'reservation',
    component: RoomListComponent,
    canActivate: [AuthGuard],
    data: {roles: ['USER', 'ADMIN']}
  },
  {
    path: 'reservation/new',
    component: IssueFormComponent,
    canActivate: [AuthGuard],
    data: {roles: ['USER', 'ADMIN']}
  },
  {
    path: 'reservation/:id',
    component: IssueDetailComponent,
    canActivate: [AuthGuard],
    data: {roles: ['USER', 'ADMIN']}
  },
  {
    path: 'reservation/:id/edit',
    component: IssueEditComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ADMIN']}
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'reservations/:id',
    component: GuestComponent,
    canActivate: [AuthGuard],
    data: {roles: ['USER', 'ADMIN']}
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
