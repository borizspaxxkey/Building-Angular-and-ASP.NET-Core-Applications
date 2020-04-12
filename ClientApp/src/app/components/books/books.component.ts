import { Component, OnInit } from '@angular/core';
import Book from 'src/app/interfaces/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];
  constructor() { }

  ngOnInit() {
  }

}
