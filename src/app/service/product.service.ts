import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const _api = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }



  getProduct(): Observable<any> {
    return this.http.get<any>(`${_api}/products`);
  }

  getProductIndex(): Observable<any> {
    return this.http.get<any>(`${_api}/products/?_limit=3`);
  }

  getProductByCategory(id: number): Observable<any> {
    return this.http.get<any>(`${_api}/products/?categoryId=${id}`);
  }

  getProductShop(url: string): Observable<any> {
    return this.http.get<any>(`${_api}/products?${url}`)
  }
}
