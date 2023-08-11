import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const _api = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategory(): Observable<any> {
    return this.http.get<any>(`${_api}/category`);
  }
  getUsers():Observable<any> {
   
      return this.http.get<any[]>(`${_api}/login`);
  
  }
  postUser(data:any):Observable<any> {
   
    return this.http.post<any>(`${_api}/login`, data)
  
  }

}
