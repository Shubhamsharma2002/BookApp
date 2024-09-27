import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {dataUrl} from  '../api.urls';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  http = inject(HttpClient);

  getBook(){
    return this.http.get<Response<Book[]>>(`${dataUrl.bookdataApi}`);
  }
}

export type Book = {
  _id: string;
  title: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
};

export type Response<T> = {
  success: boolean;
  status: number;
  message: string;
  data: T
}