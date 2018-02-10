import { Component, OnInit } from '@angular/core';
import {BooksService} from '../../services/books.service';
import {BookDetailComponent} from '../../components/book-detail/book-detail.component';
import {Book} from '../../models/book';


@Component({
  selector: 'app-search',
  providers:[BooksService],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private query;
  private suggestions = [];
  constructor(private booksService:BooksService) {
  }

  ngOnInit() {
  }

  search():void{
    this.booksService.searchByQuery(this.query)
      .then((response) => {
        console.log(response);
        var filteredBooks = response["docs"]
          .filter(el => {
            return el.title != null && 
                   el.author_name != null &&
                   el.cover_i != null
          })
          .map(book => {
            return new Book(book.title, book.author_name[0], book.cover_i)
          });
          this.suggestions = filteredBooks;
      })
      .catch((error) => {
        console.log(error);
      })
  }

}
