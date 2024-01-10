import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../Book';
import { BooksComponent } from '../../components/books/books.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  standalone: true,
  imports: [BooksComponent, NavbarComponent, RouterOutlet, NgOptimizedImage],
})
export class BookComponent implements OnInit {
  book!: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const bookId = params.get('id');

      if (bookId) {
        this.bookService.getBook(bookId).subscribe((book) => {
          this.book = book;
        });
      }
    });
  }
}
