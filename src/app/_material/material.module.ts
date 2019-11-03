import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';
import {MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    Material.MatDialogModule,
    MatInputModule,
  ],
  exports: [
    Material.MatDialogModule,
    MatInputModule,
  ]
})
export class MaterialModule { }
