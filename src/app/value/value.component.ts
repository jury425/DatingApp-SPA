import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { timeout } from '../../../node_modules/@types/q';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})

export class ValueComponent implements OnInit {
  values: any;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    this.getValues();
    console.log(this.values);
  }

  getValues(){
    this._httpClient.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => { console.log(error)} );
  }

}
