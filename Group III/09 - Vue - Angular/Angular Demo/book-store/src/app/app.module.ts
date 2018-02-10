import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsComponent } from './components/details/details.component';
import { HttpClient } from '@angular/common/http/src/client';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

const appRoutes:Routes = [
  {path:"search", component: SearchComponent},
  {path:"details/:title", component: DetailsComponent},
  {path:"**", redirectTo: "/search"}
]


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DetailsComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
