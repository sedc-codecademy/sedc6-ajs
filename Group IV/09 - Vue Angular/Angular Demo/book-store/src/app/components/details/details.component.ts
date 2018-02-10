import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private sub;
  private title;
  constructor(private routes:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.routes.params.subscribe(
      (param) => {
        this.title = param['title'];
      }
    )
  }

}
