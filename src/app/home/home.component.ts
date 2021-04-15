import { Component, OnInit } from '@angular/core';
import {Books} from '../model/Books';
import {BooksService} from '../books.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books: Books[]=[];

  constructor(private bookService: BooksService,
              private router: Router) {
    this.showAll();
  }
  // @ts-ignore
  showAll():Books[]{
    this.bookService.getAllBook().subscribe(books =>{
      this.books = books;
      console.log(books)
    })
  }

  ngOnInit(): void {
  }

}
