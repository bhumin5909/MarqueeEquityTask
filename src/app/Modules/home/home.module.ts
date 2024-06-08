import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../Components/home/home.component';
import { BookShelfComponent } from '../../Components/book-shelf/book-shelf.component';
import { BookShowComponent } from '../../Components/book-show/book-show.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'myBookShelf',
    component:BookShelfComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    BookShelfComponent,
    BookShowComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:
  [
    RouterModule
  ]
})
export class HomeModule { }
