import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Book } from '../../Services/book.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({ required: true }) book!: Book;
}
