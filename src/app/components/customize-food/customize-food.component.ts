import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListMenuComponent } from '../list-menu/list-menu.component';

@Component({
  selector: 'app-customize-food',
  templateUrl: './customize-food.component.html',
  styleUrls: ['./customize-food.component.scss']
})
export class CustomizeFoodComponent implements OnInit {

  isLinear = false;

  constructor( public dialogRef: MatDialogRef<ListMenuComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    console.log('this is custom component: ' + this.data.name);
  }

  data1(object) {
      console.log(object.itemObject);
  }

}
