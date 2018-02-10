import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books/books.service';
import { Book } from '../../models/book';


@Component({
  selector: 'search',
  providers:[BooksService],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private queryString:string;
  private loading = false;
  private suggestions = [];
  constructor(private booksService:BooksService) { }

  ngOnInit() {
  }

  search():void{
    this.loading = true;
    this.booksService.searchByQuery(this.queryString)
        .then((response)=>{
          
          var filterdBooks = response["docs"]
              .filter( el => {
                return el.title != null &&
                       el.author_name != null &&
                       el.cover_i != null
              });
              
          this.suggestions = filterdBooks
              .map(el => {
                return new Book(el.title, el.author_name.join(", "), el.cover_i )
              });
              
          this.loading = false;
        })
        .catch(error => {
          console.log(error)
        })
  }

}
