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
  imgCollection: Array<object> = []; 

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

    if (this.finalLocalTemp <= 50) {
      this.coldTempPhotos();
    }
  }

  coldTempPhotos() {
    this.imgCollection = [
      {
       image: 'assets/img/heavyjacket.png',
       thumbImage: 'assets/img/heavyjacket.png',
       title: 'A Heavy Warm Jacket'
      },
      {
        image: 'assets/img/gloves.png',
        thumbImage: 'assets/img/gloves.png',
        title: 'Warm Winter Gloves'
      },
      {
        image: 'assets/img/handwarmers.png',
        thumbImage: 'assets/img/handwarmers.png',
        title: 'Hand Warmers!'
      },
      {
        image: 'assets/img/snowboots.png',
        thumbImage: 'assets/img/snowboots.png',
        title: 'Snowboots'
      }
    ]
  }


}
