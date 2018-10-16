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
        this.menu = data; // I called to the service to get the data from the API and assigned it to 'menu' variable
      }
    );
  }

  customFood(element) {
  const dialogRef = this.dialog.open(CustomizeFoodComponent, {// with this, I open my customize-food component
    width: '700px',
    height: '800px',
    data: element // I pass the data to customize-food
  });
  }

}
