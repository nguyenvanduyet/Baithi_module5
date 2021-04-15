import { Component, OnInit } from '@angular/core';
import {Books} from '../model/Books';
import {BooksService} from '../books.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  sud: Subscription;
  // @ts-ignore
  book: Books
  id: number=0;


  constructor(private bookService: BooksService,
              private act: ActivatedRoute) {
    this.sud = this.act.paramMap.subscribe((p: ParamMap) =>{
      // @ts-ignore
      this.id= +p.get('id')
      bookService.findBookById(this.id).subscribe((book: Books)=>{
        this.book= book;
      })
    })
  }



  ngOnInit(): void {
  }


}
