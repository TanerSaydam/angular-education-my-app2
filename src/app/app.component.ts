import { Component, ViewEncapsulation } from '@angular/core';
import { CarModel } from './models/car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  //primitive => ilkel tipler
  //string => metinsel değerleri ifade eder
  //number => tüm rakamsal değerleri tutar
  //boolean => true / false - 0 / 1
  //date => new Date()
  //object => nesne türetmemizi sağlıyor
  //array => birden fazla nesne türetmemizi sağlıyor

  //sytanx => degisken_adi : degisken_tipi = degisken_degeri
  person: string;



  name:string = "Taner Saydam";
  age:number = 155456465.20;
  isActive:boolean = true; //is veya has 
  date: Date = new Date();
  dateString: string = new Date().toString();
  car: {
    name:string,    
    yasi:number,
    status:boolean
  } = {
    name: "Audi",
    yasi:2023,
    status: true
  };

  car2 = {
    name: "Reno",
    yasi: 2025,
    statys: true,
    salary: 50000
  }

  carModel:CarModel = {name:"",age:1,price:5000,status:false};
  carModel2:CarModel = new CarModel();  

  carModel3: Car2Model = new Car2Model();
  
  names: string[]= ["Taner","Ahmet","Ayşe"]; //array
  cars:any = [
    {name: "",price:0},
    0,
    {name: "",price:0},
    "Taner",
    true,
    {name: "",price:0, age: 0},
    new Car2Model()
  ]

  cars2: Car2Model[] = [
    new Car2Model(),
    new Car2Model(),
    new Car2Model(),
    new Car2Model(),
    new Car2Model(),
    {age:0,name:"",status: true}
  ]

  constructor(){
   // this.carModel2.name = "";
    console.log(this.carModel2);
  }
}

export class Car2Model{
  name: string = "";
  age: number = 0;
  status: boolean = true;  
}
