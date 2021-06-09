import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  age:number = 25
  weight:number = 60

  height:number = 155

  sex_person:string;

  constructor(private router: Router) {
    this.sex_person = ''
   }

  ngOnInit(): void {
  }

  //function to add age
  addAge(){
    this.age++
  }

  //function to substract age
  reduceAge(){
    if(this.age > 0){
      this.age--
    }
    
  }

  //function to add weight
  addWeight(){
    this.weight++
  }

  //function to substract weight
  reduceWeight(){
    if(this.weight > 0){
      this.weight--
    }
    
  }

  
  //function to set variable sex to male person

  setMale(){
    this.sex_person = 'Masculino'
  }

  //function to set variable sex to female person

  setFemale(){
    this.sex_person = 'Femenino'
  }

  //Calculate BMI

  calculateBMI(){
    
    if(this.weight === 0 || this.height === 0){
      alert("ingrese un peso y una altura")
    }else{
      const BMI = this.weight / Math.pow(this.height/100,2)
      this.router.navigate(['result',BMI.toFixed(2)])
    }
    
  }



}
