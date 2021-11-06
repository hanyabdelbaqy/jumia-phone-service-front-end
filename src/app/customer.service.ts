import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {SearchCustomerRequest} from "./searchCustomerRequest";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:9595/jumia/services/customers';

  constructor(private http: HttpClient) { }

  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  searchCustomer(searchCustomerRequest: SearchCustomerRequest): Observable<any> {
    return this.http.post( this.baseUrl + '/search', searchCustomerRequest, httpOptions);
  }
}
