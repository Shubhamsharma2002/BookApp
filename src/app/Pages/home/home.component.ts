import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Book, BookService } from '../../Services/book.service';
import { CardComponent } from '../../Component/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
    
  private bookservice = inject(BookService);
  books : Book[] = [];
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.bookservice.getBook().subscribe({
      next:(res) =>{
        this.books = res.data;
      }
    })
  }
}
