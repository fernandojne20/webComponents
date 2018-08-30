import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Hotel } from '../shared/interfaces/Hotel';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class HotelService {

  constructor(private http: HttpClient) {

  }
  getHotels() {
    return this.http.get(`http://almundoapi.herokuapp.com/hotels`)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('Get Hotels Request Error', err.message);
          return of(Array<Hotel>());
        })
      ) ;
  }
}
