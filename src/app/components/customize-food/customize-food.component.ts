import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListMenuComponent } from '../list-menu/list-menu.component';
import { CustomService } from '../../services/custom.service';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-customize-food',
  templateUrl: './customize-food.component.html',
  styleUrls: ['./customize-food.component.scss']
})
export class CustomizeFoodComponent implements OnInit {

  multiple: Boolean = false;
  selected: Boolean = false;
  isLinear: Boolean = true;
  customizeData = [];
  firstFormGroup: FormGroup;

  constructor( public dialogRef: MatDialogRef<ListMenuComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private _customService: CustomService,
             ) { }

  ngOnInit() {
    this.data.steps.map(dataSteps => dataSteps.items.map(data => data.multiple = false));
  }

  pickCustom(value) { // this method is for save the customize within a array
    this.customizeData[ value.itemStep.id - 1] = value;
  }

  // multipleSelect(value) {
  //   this.customizeData[ value.itemStep.id - 1]
  // }

  saveCustom() {
    // tslint:disable-next-line:max-line-length
    const model = this.data.steps[this.data.steps.length - 1].items
                  .filter(datab => datab.multiple === true);
    const option = this.customizeData.concat(model);
    console.log(option);
    this.dialogRef.close();
    this._customService.createCustomFood(option);
    alert('se ha guardado tu elección con exito!');
  }

}
