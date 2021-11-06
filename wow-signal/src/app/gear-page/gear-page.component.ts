import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gear-page',
  templateUrl: './gear-page.component.html',
  styleUrls: ['./gear-page.component.css']
})
export class GearPageComponent implements OnInit {
  apiURLp1 = 'http://api.openweathermap.org/data/2.5/weather?zip=';
  apiURLp2 = ',us&appid=7850af680b8391a67426235c8aeacc9d';
  zipcode: any;
  WeatherData: any; 
  localTempK: any; 
  localTempF: any;
  finalLocalTemp: any;

  constructor() { }



  ngOnInit(): void {
  }

  getZipCode(zipCode: string) {
    this.zipcode = zipCode;
    console.log(this.zipcode);
    this.getTempData();
  }

  getTempData() {
    fetch(this.apiURLp1 + this.zipcode + this.apiURLp2)
    .then(response=>response.json())
    .then(data=>{this.setTempData(data);})
  }

  setTempData(data: any) {
    this.WeatherData = data;
    console.log(this.WeatherData);
    this.localTempK = this.WeatherData.main.temp;
    console.log(this.localTempK);
    this.convertTempData();
  }

  convertTempData() {
    this.localTempF = (this.localTempK - 273.15) * (9/5) + 32;
    this.finalLocalTemp = Math.trunc(this.localTempF);
    console.log(this.finalLocalTemp);
  }


}
