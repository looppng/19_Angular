import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BookComponent } from './pages/book/book.component';
import { BooksComponent } from './pages/books/books.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';

export const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'books/:id',
    component: BookComponent,
  },
  {
    path: 'books/:id/edit',
    component: EditBookComponent,
  },
];
