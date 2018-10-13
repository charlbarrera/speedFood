import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomService } from '../../services/custom.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-summary-order',
  templateUrl: './summary-order.component.html',
  styleUrls: ['./summary-order.component.scss']
})
export class SummaryOrderComponent implements OnInit {

  dataSource = [];
  showMessage: Boolean = true;
  @ViewChild(MatTable) table: MatTable<any>;
  displayedColumns: string[] = ['name', 'details', 'price'];

  constructor(private _customService: CustomService) { }

  ngOnInit() {
     this._customService.summaryCustomFood().subscribe(
      data => {
         this.dataSource.push(data);
         this.table.renderRows();
         this.getPriceTotal();
         this.showMessage = false;
      }
    );
  }

  getPriceTotal() {
    return this.dataSource.map( a => a.price).reduce((a, b) => a + b, 0);
  }

}
