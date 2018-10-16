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

  isLinear: Boolean = true;
  customizeData = [];
  firstFormGroup: FormGroup;

  constructor( public dialogRef: MatDialogRef<ListMenuComponent>,
              @Inject(MAT_DIALOG_DATA) public data, // here I called the data from list-menu component
              private _customService: CustomService,
             ) { }

  ngOnInit() {
    this.data.steps.map(dataSteps => dataSteps.items.map(data => data.multiple = false)); // I created a propiety in
                                                    //  each item of data named 'multiple' to help checkbox
  }

  pickCustom(value) { // this method saves each customized food in an array,
                      // each step is an index within the array
    this.customizeData[ value.itemStep.id - 1] = value;
  }

  saveCustom() { // this is the method that is activated when we push the button 'guardar'
    const model = this.data.steps[this.data.steps.length - 1].items
                  .filter(datab => datab.multiple === true); // I saved in 'model' the data
                          // that has a true value in multiple (for the checkbox items)
    const option = this.customizeData.concat(model); // I joined the array with customized food(radio group) with the items of checkbox
    this.dialogRef.close(); // closing my customize component
    this._customService.createCustomFood(option);
    alert('se ha guardado tu elección con exito!');
  }

}
