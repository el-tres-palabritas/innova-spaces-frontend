import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, retry, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  basePath: string = "https:://localhost:4000"
  resourceEndpoint: string ='/resources'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(() => new Error('Something happened with request. Try again later.'));
  }

  private resourcePath() {
    return `${this.basePath}${this.resourceEndpoint}`;
  }

  create(item: any): Observable<T> {
    console.log('Creating new resource...');
    return this.http.post<T>(this.resourcePath(), JSON.stringify(item), this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));
  }

  delete(id: any){
    return this.http.delete(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));
  }

  update(id: any, item: any){
    return this.http.put<T>(`${this.resourcePath()}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));
  }

  getAll() {
    return this.http.get<T[]>(this.resourcePath(), this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));
  }

  getById(id: any){
    return this.http.get<T>(`${this.resourcePath()}/${id}`,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));
  }
}
