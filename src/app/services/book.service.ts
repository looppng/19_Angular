import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../Book';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:3001/api/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  deleteBook(book: Book): Observable<Book> {
    const url = `${this.apiUrl}/${book.id}`;
    return this.http.delete<Book>(url);
    // return this.http.get<Book>(this.apiUrl);
  }

  getBook(id: string): Observable<Book> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Book>(url);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book, httpOptions);
  }

  editBook(book: Book): Observable<Book> {
    const url = `${this.apiUrl}/${book.id}`;
    return this.http.put<Book>(url, book);
  }
}
