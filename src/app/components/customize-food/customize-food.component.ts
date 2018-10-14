import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListMenuComponent } from '../list-menu/list-menu.component';
import { CustomService } from '../../services/custom.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customize-food',
  templateUrl: './customize-food.component.html',
  styleUrls: ['./customize-food.component.scss']
})
export class CustomizeFoodComponent implements OnInit {

  isLinear: Boolean = true;
  customizeData = [];
  firstFormGroup: FormGroup;

  constructor( public dialogRef: MatDialogRef<ListMenuComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private _customService: CustomService,
             ) { }

  ngOnInit() {
  }

  pickCustom(value) { // this method is for save the customize within a array
    this.customizeData[ value.itemStep.id - 1] = value;
  }

  saveCustom() {
    this._customService.createCustomFood(this.customizeData);
    this.dialogRef.close();
    alert('se ha guardado tu elección con exito!');
  }

}
