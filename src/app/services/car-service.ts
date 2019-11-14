import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CarService {

  private baseUrl = `http://localhost:8080/api/v1/car`;

  constructor(private http: HttpClient) {}

  getCarList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCar(id: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/myCar?ID=${id}`);
  }

  createCar(car: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/createCar`, car);
  }

  updateCar(id: String, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/editCar/${id}`, value);
  }

  deleteCar(id: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteCar/${id}`, { responseType: 'text'})
  }

}
