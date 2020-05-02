import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';

 export interface Books{
  book_id:String;    
  goodreads_book_id:String;
  best_book_id:String;
  work_id:String;
  books_count:String;
  isbn:String;
  isbn13:String;
  authors:String;
  original_publication_year:String;
  original_title:String;
  title:String;
  language_code:String;
  average_rating:String;
  ratings_count:String;
  work_ratings_count:String;
  work_text_reviews_count:String;
  ratings_1:String;
  ratings_2:String;
  ratings_3:String;
  ratings_4:String;
  ratings_5:String;
  image_url:String;
  small_image_url:String;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    books: Books[];
  constructor(public userService: UserService) { 
    this.userService.getBook().subscribe(
      data =>{
           this.books = data;
      }
    ) 
    console.log(this.books)
  }
  showBook(book:Books,i:number){
    console.log(i);
  }
  ngOnInit(): void {
    
  }
}
