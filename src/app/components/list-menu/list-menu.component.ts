import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent implements OnInit {

  menu: any;

  constructor(private _menuService: MenuService) { }

  ngOnInit() {
    this._menuService.getMenu().subscribe(
      data => this.menu = data
    );
  }

}
