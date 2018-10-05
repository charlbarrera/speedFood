import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenu() {
    return this.http.get('http://cdn.tekus.co/PT2018/Products.json');
  }
}
