import { Injectable } from '@angular/core';
import {Quote} from "./quote.model";

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  quotes: Quote[] = [
    {
      id: 'q1',
      author: 'Horace.',
      text: 'Carpe diem.',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0885/9474/products/Illuminati-Live_Fast_Die_Young.JPG?v=1481109565'
    },
    {
      id: 'q2',
      author: 'N.N.',
      text: 'Embrace change.',
      imageUrl: 'https://image.freepik.com/free-vector/carpe-diem-flowers_83277-1509.jpg'
    }
  ];

  constructor() {}

  getQuote(id: string) {
    return this.quotes.find((q) => q.id === id);
  }

}
