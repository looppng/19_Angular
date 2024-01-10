import { Component, OnInit } from '@angular/core';
import { Book } from '../../Book';
import { NgForOf } from '@angular/common';
import { BookItemComponent } from '../book-item/book-item.component';
import { BookService } from '../../services/book.service';
import { AddBookComponent } from '../add-book/add-book.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [NgForOf, BookItemComponent, AddBookComponent, RouterLink],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe((books) => (this.books = books));
  }

  deleteBook(book: Book) {
    this.bookService
      .deleteBook(book)
      .subscribe(
        () => (this.books = this.books.filter((b) => b.id! !== book.id)),
      );
  }

  addBook(book: Book) {
    this.bookService.addBook(book).subscribe((book) => this.books.push(book));
  }

  onEditBook(book: Book) {
    console.log(book);
  }
}
