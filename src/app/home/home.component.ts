import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode: boolean = false;
  canceled = false;

  constructor() { }

  ngOnInit() {
  }

  registerToogle(){
    this.registerMode = true;
  }

  cancelRegister(registerCancel){
    console.log(registerCancel);
    this.registerMode = registerCancel;
  }

}
