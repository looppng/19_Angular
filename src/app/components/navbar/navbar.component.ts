import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, ButtonComponent, NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  showAddBook!: boolean;
  subscription!: Subscription;
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddBook = value));
  }

  ngOnInit() {}

  addBook() {
    this.uiService.toggleAddBook();
  }
}
