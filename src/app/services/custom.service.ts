import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  private $subject = new Subject<any>(); // creating an observable

  constructor() { }

  createCustomFood(food) { // when user saves the customized food this function is called
    const newFood = {detail: '', name: '', price: '', moreDetails: ''};
    const details = food.filter(whole => whole.item).map(data => data.item.name);
    // with details I filtered only the data that contains items from radio group
    const moreDetails = food.filter(name => name.name).map(data => data.name);
    // with moreDetails I filtered the data that contain object from checkbox
    newFood.detail = details.concat(moreDetails);
    // then I joined these two arrays 'details' and 'moreDetails' to have the items with radio group
    // and checbox in one array
    newFood.name = food[0].food.name;
    newFood.price = food[0].food.price;
    // so far, I created a model of data to save in the observable $subject
    this.$subject.next(newFood);
  }

  summaryCustomFood(): Observable<any> {
    return this.$subject.asObservable();
  }

}

