import { Component } from '@angular/core';
import { AddBookComponent } from '../../components/add-book/add-book.component';
import { BookItemComponent } from '../../components/book-item/book-item.component';
import { NgForOf } from '@angular/common';
import { BookService } from '../../services/book.service';
import { Book } from '../../Book';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [AddBookComponent, BookItemComponent, NgForOf],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
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
