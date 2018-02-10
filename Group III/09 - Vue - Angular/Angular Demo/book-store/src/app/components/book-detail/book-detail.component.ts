import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book';



@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  private sub;
  private title;
  constructor() { }

  @Input() book:Book

  ngOnInit() {

  }

}
