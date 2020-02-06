import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() registerCanceled = new EventEmitter<boolean>()

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register(){
    console.log(this.model);
    this.authService.register(this.model)
      .subscribe(() => {
        this.alertify.success("Registration successfull!");
      }, error => {
        this.alertify.error("Registration error...");
      });
  }

  cancel(){
    this.registerCanceled.emit(false);
  }

}
