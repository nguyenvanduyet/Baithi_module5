import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {Books} from './model/Books';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BooksService {


  constructor(private  httpClient: HttpClient) {
  }

  getAllBook(): Observable<Books[]> {
    return this.httpClient.get<Books[]>(API_URL);
  }

  // @ts-ignore
  createBook(book: Books): Observable<Books> {
    return this.httpClient.post<Books>(API_URL, book);
  }

  // @ts-ignore
  editBook(id: number, book: Books): Observable<Books> {
    return  this.httpClient.put<Books>(API_URL + `/${id}`, book);
  }

  // @ts-ignore
  findBookById(id: number): Observable<Books> {
    return this.httpClient.get<Books>(API_URL + `/${id}`);
  }

  // @ts-ignore
  delete(id: number): Observable<Books> {
    // @ts-ignore
    return this.httpClient.delete(API_URL + `/${id}`);
  }


}
