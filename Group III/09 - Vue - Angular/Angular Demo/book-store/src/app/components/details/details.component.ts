import { Component, OnInit } from '@angular/core';
import {BooksService} from '../../services/books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  providers:[BooksService],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private sub;
  private title;
  constructor(private route:ActivatedRoute,
              private bookService:BooksService) { }

  ngOnInit() {
    this.sub = this.route.params
    .subscribe( params => {
      this.title = params['title']
    })
  }

  getBookDetails(){
    this.bookService;
  }

}
