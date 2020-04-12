import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Book from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  _baseURL: string = 'api/Books';

  constructor(private http: HttpClient) {

  }

  getAllBooks() {
    return this.http.get<Book[]>(this._baseURL + "/GetBooks");
  }

  addBook(book: Book) {
    return this.http.post<Book>(this._baseURL + "/AddBook/", book);
  }

  getBookById(id: number) {
    return this.http.get<Book>(this._baseURL + "/SingleBook/" + id);
  }

  updateBook(book: Book) {
    return this.http.put(this._baseURL + "/UpdateBook/" + book.id, book);
  }
}
