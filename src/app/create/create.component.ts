import {Component, OnInit} from '@angular/core';
import {BooksService} from '../books.service';
import {Router} from '@angular/router';
import {Books} from '../model/Books';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  book: Books = {
    id:0,
    title:'',
    author: '',
    description: '',
}
  constructor(private booksService: BooksService,
              private router: Router) {
  }
  createBook(){
    this.booksService.createBook(this.book).subscribe(() =>{
      this.router.navigate(['/'])
    })
  }

  ngOnInit(): void {
  }

}
