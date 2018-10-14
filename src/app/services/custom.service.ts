import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  private $subject = new Subject<any>();

  customFood = [];
   newFood = {food: [], detail: '', name: '', price: ''};
//  7:30 - 12;
//  function 17 octumbre calle 47 81-85 102 barrio floresta 4487350;
  constructor() { }

  createCustomFood(food) {
    this.newFood.detail = food.map(data => data.item.name);
    this.newFood.name = food[0].food.name;
    this.newFood.price = food[0].food.price;
    this.customFood.push(this.newFood);
    this.$subject.next(this.newFood);
  }

  summaryCustomFood(): Observable<any> {
    return this.$subject.asObservable();
  }

  sendOrder() {
    this.newFood = {food: [], detail: '', name: '', price: ''};
    this.$subject.next(this.newFood);
  }

}

