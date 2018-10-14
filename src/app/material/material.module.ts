import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatStepperModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatChipsModule
  ],
  exports: [
    MatCardModule,
    MatDialogModule,
    MatStepperModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatChipsModule
  ],
  declarations: []
})
export class MaterialModule { }
