import { DataFetchingService } from 'src/app/Services/data-fetching.service';
import { Component } from '@angular/core';
import { Book } from '../book-show/book-show.component';

@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.scss']
})
export class BookShelfComponent {
  constructor(private dataFetchingService:DataFetchingService){}
  books: Book[] = [];

  ngOnInit(): void{
    this.dataFetchingService.getLocal();
    this.dataFetchingService.bookSubject.subscribe((books)=>{
      this.books = books;
    });
  }

  removeBook(id:number): void
  {
    this.dataFetchingService.removeFromBookShelf(id);
  }
}
