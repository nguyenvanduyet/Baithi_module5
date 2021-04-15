import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {BooksService} from '../books.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Books} from '../model/Books';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  sub: Subscription;
  id: number = 0;
  constructor(private bookService: BooksService,
              private router: Router,
              private act: ActivatedRoute) {
    this.sub = this.act.paramMap.subscribe((p: ParamMap) => {
      // @ts-ignore
      this.id = +p.get('id')
      this.deleteBook(this.id)
    })
  }
  deleteBook(id: number) {
    this.bookService.delete(id).subscribe(() => {
      this.router.navigate(['/']);
    });
  }



  ngOnInit(): void {
  }

}
