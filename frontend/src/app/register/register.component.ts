import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: User = new User();
  message: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
   
  }

  async submit(f) {
    if (f.invalid) {
      return;
    }
    try {
      this.message = 'Try to register';
      await this.authService.register(this.model);
      console.log('success')
      this.router.navigate([this.authService.redirectUrl]);
    }
    catch(e) {
      this.message = 'Registration failed';
      console.log(e);
    }
  }
}
