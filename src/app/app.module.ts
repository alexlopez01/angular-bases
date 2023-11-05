import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
//import { CounterComponent } from './Counter/counter.component';
//import { HeroComponent } from './Heroes/Hero/hero.component';
//import { ListComponent } from './Heroes/list/list.component';
import { CounterModule } from './Counter/counter.module';
import {HeroesModule } from './Heroes/Heroes.module';


@NgModule({
  declarations: [
    AppComponent,
//    CounterComponent,
//    HeroComponent,
//    ListComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
