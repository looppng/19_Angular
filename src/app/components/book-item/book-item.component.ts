import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../Book';
import { NgClass, NgOptimizedImage, NgStyle } from '@angular/common';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [NgOptimizedImage, FontAwesomeModule, NgStyle, NgClass, RouterLink],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css',
})
export class BookItemComponent implements OnInit {
  @Input() book!: Book;
  @Output() onDeleteBook: EventEmitter<Book> = new EventEmitter();
  @Output() onEditBook: EventEmitter<Book> = new EventEmitter();

  faTrash = faTrash;
  faPenToSquare = faPenToSquare;
  constructor() {}

  ngOnInit() {}

  onLikeClick(): void {
    this.book.liked = !this.book.liked;
  }

  onDislikeClick(): void {
    this.book.liked = !this.book.liked;
  }

  onDelete(book: Book) {
    this.onDeleteBook.emit(book);
  }

  onEdit(book: Book) {
    this.onEditBook.emit(book);
  }
}
