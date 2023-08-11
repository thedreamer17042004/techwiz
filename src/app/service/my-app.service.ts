import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyAppService {


  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('/assets/data.json')
  }

  getProductByCatId(CatId: number, data: any) {
    return data.filter((item: any) => {
      return item.categoryId == CatId;
    })
  }

  getProductById(id: number, data: any) {
    return data.find((item: any) => {
      return item.id == id;
    })
  }

  getProductByName(name: any, data: any) {
    return data.filter((item: any) => {
      return item.name.toLowerCase().includes(name.toLowerCase());
    })
  }

  getProductBySort(sort: any, order: any, data: any) {
    if (sort == 'saleprice') {
      return data.sort((item1: any, item2: any) => {
        if (order == 'asc') {
          return item1.saleprice < item2.saleprice ? -1 : 0;
        } else {
          return item1.saleprice > item2.saleprice ? -1 : 0;
        }
      })
    }

    if (sort == 'name') {
      return data.sort((item1: any, item2: any) => {
        if (order == 'asc') {
          return item1.name < item2.name ? -1 : 0;
        } else {
          return item1.name > item2.name ? -1 : 0;
        }
      })
    }
  }
}
