import { Component, OnInit } from '@angular/core';
import Book from 'src/app/interfaces/book';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {
  book: Book;

  constructor() { }

  ngOnInit() {
  }

}
