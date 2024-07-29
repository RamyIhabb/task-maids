import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';
  private cache = new Map<string, any>();

  constructor(private http: HttpClient) { }

  getUsers(page: number): Observable<any> {
    const url = `${this.apiUrl}?page=${page}`;
    if (this.cache.has(url)) {
      return of(this.cache.get(url));
    } else {
      return this.http.get(url).pipe(
        map(response => {
          this.cache.set(url, response);
          return response;
        }),
        catchError(error => {
          console.error(error);
          return of(null);
        })
      );
    }
  }

  getUser(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    if (this.cache.has(url)) {
      return of(this.cache.get(url));
    } else {
      return this.http.get(url).pipe(
        map(response => {
          this.cache.set(url, response);
          return response;
        }),
        catchError(error => {
          console.error(error);
          return of(null);
        })
      );
    }
  }
}
