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
  @ViewChild(MatTable) table: MatTable<any>; // is a reference to the mat-table
  displayedColumns: string[] = ['name', 'details', 'price', 'actions']; // the data within the table

  constructor(private _customService: CustomService) { } // calling to my service

  ngOnInit() {
     this._customService.summaryCustomFood().subscribe( // in my service I have an observable
      data => { // then each time that the user has a new data, automatically this is updated
          this.showMessage = false; // don't show the message if a new data is entered
         this.dataSource.push(data); // save the data within the dataSource
         this.table.renderRows(); // this is to update the table when it has a new data
         this.getPriceTotal(); // this is to update the price when it has a new data
      }
    );
  }

  getPriceTotal() {
    return this.dataSource.map( a => a.price).reduce((a, b) => a + b, 0); // function is for adding
  }

  sendOrder() {
    const confirmOrder = confirm('esta seguro de su orden?');
    if (confirmOrder) {
      this.dataSource.length = 0; // if User accepts the order this deletes data from table
      this.table.renderRows(); // update table
      alert('Orden en camino');
      this.showMessage = true;
    } else {
      console.log('cancelado');
    }
  }

}
