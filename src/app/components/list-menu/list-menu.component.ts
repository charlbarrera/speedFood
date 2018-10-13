import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MatDialog } from '@angular/material/dialog';
import { CustomizeFoodComponent } from '../customize-food/customize-food.component';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent implements OnInit {

  menu: any;

  constructor(private _menuService: MenuService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this._menuService.getMenu().subscribe(
      data => {
        this.menu = data;
      }
    );
  }

  customFood(element) {
  const dialogRef = this.dialog.open(CustomizeFoodComponent, {
    width: '600px',
    height: '500px',
    data: element
  });
  }

}
