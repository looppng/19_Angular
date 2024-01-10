import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddBook: boolean = false;
  private subject = new Subject<any>();
  constructor() {}

  toggleAddBook(): void {
    this.showAddBook = !this.showAddBook;
    this.subject.next(this.showAddBook);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
