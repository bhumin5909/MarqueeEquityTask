import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../Components/book-show/book-show.component';
import { BehaviorSubject, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFetchingService{

  constructor(private http:HttpClient) { }

  getLocal(){
    let localBook = localStorage.getItem('BookShelf');
    if(localBook)
    this.bookShelf =  Array.from(JSON.parse(localBook));
    this.bookSubject.next(this.bookShelf);
  }

  bookShelf: Book[] = [];
  bookSubject: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(this.bookShelf);

  checkBookInShelf(book: Book): boolean {
    return this.bookShelf.find((bk: Book) => {return bk.title === book.title})?true:false;
  }
  addToBookShelf(book:Book):void
  {
    this.bookShelf.push(book);
    this.bookSubject.next(this.bookShelf);
    localStorage.setItem("BookShelf", JSON.stringify(this.bookShelf));
  }

  removeFromBookShelf(id:number):void
  {
    this.bookShelf.splice(id, 1);
    localStorage.setItem("BookShelf", JSON.stringify(this.bookShelf));
  }

  getBooks(bookName:string): any
  {
    return this.http.get("https://openlibrary.org/search.json?q="+bookName+"&limit=10&page=1").pipe(catchError((err:HttpErrorResponse) => {
      return throwError(()=>err)
    }))
  }

}
