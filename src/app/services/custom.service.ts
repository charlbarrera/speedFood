import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  private $subject = new Subject<any>();

//  7:30 - 12;
//  function 17 octumbre calle 47 81-85 102 barrio floresta 4487350;
  constructor() { }

  createCustomFood(food) {
    const newFood = {detail: '', name: '', price: '', moreDetails: ''};
    const details = food.filter(whole => whole.item).map(data => data.item.name);
    const moreDetails = food.filter(name => name.name).map(data => data.name);
    newFood.detail = details.concat(moreDetails);
    newFood.name = food[0].food.name;
    newFood.price = food[0].food.price;
    console.log(newFood);
    this.$subject.next(newFood);
  }

  summaryCustomFood(): Observable<any> {
    return this.$subject.asObservable();
  }

}

