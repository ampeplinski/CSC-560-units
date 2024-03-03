import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourcyclistTopComponent } from '../tourcyclist-top/tourcyclist-top.component';
import { TourcyclistFormComponent } from '../tourcyclist-form/tourcyclist-form.component';



@NgModule({
  declarations: [
    TourcyclistTopComponent,
    TourcyclistFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TourcyclistsModule { }
