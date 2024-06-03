import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RobotControlComponent } from './module/robot-control/robot-control.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RobotService} from "./service/robot.service";
import {RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    RobotControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet
  ],
  providers: [RobotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
