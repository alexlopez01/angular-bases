import { Component } from '@angular/core';

@Component( {
  selector: 'app-counter',
  template:  ` <h3> counter: {{counter}} </h3>
               <button (click)="increaseby(+1)">+1 </button>
               <button (click)="reset()">Reset</button>
                <button (click)="increaseby(-1)">-1</button>


  `

})
export class CounterComponent{
  public title: String = 'Mi primera app de Angular';

  public  counter : number =10;
  increaseby (value:number):void{

    this.counter +=value;
  }

  reset () {

    this.counter=10

  }

}
