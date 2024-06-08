import { Component, ViewChild } from '@angular/core';
import { BookShowComponent } from '../book-show/book-show.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(BookShowComponent) bookShow!: BookShowComponent;
  searchbook(data:any):void
  {
    if(data.target.value.trim().length > 0)
      {
        this.bookShow.searchBook(data.target.value.trim());
        this.bookShow.isLoading = true;
      }

  }
}
