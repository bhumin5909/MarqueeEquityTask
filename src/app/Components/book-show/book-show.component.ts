import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataFetchingService } from 'src/app/Services/data-fetching.service';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.scss']
})
export class BookShowComponent{
  constructor(private dataFetchingService: DataFetchingService){}
  books: Book[] = [];
  errorMessage: string = '';
  isLoading: boolean = false;

  searchBook(book:string) : void{
    this.dataFetchingService.getBooks(book).subscribe({
      next: (books:any) => {
        this.books =  books.docs.map((book:any) => { return {title:book.title ,edition_count:book.edition_count,author_name:book.author_name}});
        this.isLoading = false;
        this.errorMessage = '';
      },
      error: (err:HttpErrorResponse) => {
        this.isLoading = false;
        this.errorMessage = err.statusText;
      }
    });
  }

  checkBookInShelf(book:Book) : boolean{
    return this.dataFetchingService.checkBookInShelf(book);
  }

  addBook(book:Book) : void
  {
    this.dataFetchingService.addToBookShelf(book);
  }
}
export interface Book{
  title:string,
  edition_count:string,
  author_name:string
}
