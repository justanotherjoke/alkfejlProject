import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: User = new User();
  message: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    //this.model.username = "admin";
    //this.model.password = "a";
  }

  async submit(f) {
    if (f.invalid) {
      return;
    }
    try {
      //this.message = 'Try to login';
      await this.authService.login(this.model);
      console.log('success')
      this.router.navigate([this.authService.redirectUrl]);
    }
    catch(e) {
      this.message = 'Belépés sikertelen';
      console.log(e);
    }
  }
}
