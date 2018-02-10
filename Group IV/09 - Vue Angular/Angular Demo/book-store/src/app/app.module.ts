import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsComponent } from './components/details/details.component';
import {BooksService} from './services/books/books.service';


const appRoutes:Routes= [
  {path:'search', component:SearchComponent},
  {path:'details/:title', component: DetailsComponent},
  {path:'**', redirectTo:"/search"}
];



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
