import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../Book';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css',
})
export class AddBookComponent implements OnInit {
  @Output() onAddBook: EventEmitter<Book> = new EventEmitter();
  @Output() onEditBook = new EventEmitter();

  name: string = '';
  author: string = '';
  image: string = '';
  liked: boolean = false;
  published: string = '';
  description: string = '';
  showAddBook!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddBook = value));
  }

  ngOnInit() {}

  onSubmit() {
    if (!this.name) {
      alert('add book name');
      return;
    }

    const newBook = {
      name: this.name,
      author: this.author,
      image: this.image,
      liked: this.liked,
      published: this.published,
      description: this.description,
    };

    this.onAddBook.emit(newBook);

    this.name = '';
    this.author = '';
    this.image = '';
    this.description = '';
  }
}
