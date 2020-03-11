import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SurfBoardComponent } from './surf-board.component';
import {MatButtonModule} from '@angular/material'

@NgModule({
  declarations: [
    SurfBoardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
})
export class SurfBoardModule { }
