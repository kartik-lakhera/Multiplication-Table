import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule
  ],
  exports:[
    MatInputModule,
    MatIconModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule
  ]
})
export class UiComponentModule { }
