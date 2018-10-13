import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  private $subject = new Subject<any>();

  customFood = [];
//  7:30 - 12;
//  function 17 octumbre calle 47 81-85 102 barrio floresta 4487350;
  constructor() { }

  createCustomFood(food) {
    const newFood = {food: [], detail: '', name: '', price: ''};
    newFood.detail = food.map(data => data.item.name);
    newFood.name = food[0].food.name;
    newFood.price = food[0].food.price;
    this.customFood.push(newFood);
    this.$subject.next(newFood);
  }

  summaryCustomFood(): Observable<any> {
    return this.$subject.asObservable();
  }

}

