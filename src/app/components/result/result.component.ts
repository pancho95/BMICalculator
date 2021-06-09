import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-resultado',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  bmi:number
  result:string
  message:string;
  result_color:string;

  constructor(private route:ActivatedRoute) {
    this.result = ''
    this.message = ''
    this.result_color = ''
    this.bmi = +route.snapshot.paramMap.get('value')!

   }

  ngOnInit(): void {
    this.getResult()
  }

  //Function to show message depend the value of BMI
  getResult(){

    if(this.bmi >= 25){

      this.result = 'SOBREPESO'
      this.message = 'Debe hacer más ejercicio'
      this.result_color = '#d9534f'

    }else if(this.bmi >= 18.5){

      this.result = 'NORMAL'
      this.message = 'Usted se encuentra en un peso ideal'
      this.result_color = '#5cb85c'

    }else{

      this.result = 'BAJO PESO'
      this.message = 'Debe aumentar su ingesta calórica'
      this.result_color = '#f0ad4e'

    }


  }


}
