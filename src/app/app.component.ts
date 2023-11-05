import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public title: String = 'Mi primera app de Angular';

 // El codigo comentado  fue migrado  counter. component
/*
  public  counter : number =10;
  increaseby (value:number):void{
    this.counter +=value;
  }
  reset () {
    this.counter=10
  }
*/



}
