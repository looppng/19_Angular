import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Book } from '../../Book';
import { BookService } from '../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css',
})
export class EditBookComponent implements OnInit {
  id!: string;
  book!: Book;
  form!: FormGroup;

  constructor(
    public bookService: BookService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBook(this.id).subscribe((data: Book) => {
      this.book = data;
    });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.bookService
      .editBook(this.id, this.form.value)
      .subscribe((res: any) => {
        console.log('Post updated successfully');
        this.router.navigateByUrl('/books');
      });
  }
}
