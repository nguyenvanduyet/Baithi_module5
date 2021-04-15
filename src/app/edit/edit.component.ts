import {Component, OnInit} from '@angular/core';
import {BooksService} from '../books.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {Books} from '../model/Books';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  sub: Subscription;
  book: Books = {
    id: 0,
    title: '',
    author: '',
    description: ''
  };
  id: number = 0;

  constructor(private bookService: BooksService,
              private router: Router,
              private act: ActivatedRoute) {
    this.sub = this.act.paramMap.subscribe((p: ParamMap) => {
      // @ts-ignore
      this.id = +p.get('id')
      this.findBook(this.id);
    });

  };


  findBook(id: number) {
    this.bookService.findBookById(id).subscribe(book => {
      this.book = book;

    });
  }

  update() {
    this.bookService.editBook(this.id, this.book).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit(): void {
  }

}
