import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatStepperModule,
    MatToolbarModule
  ],
  exports: [
    MatCardModule,
    MatDialogModule,
    MatStepperModule,
    MatToolbarModule
  ],
  declarations: []
})
export class MaterialModule { }
