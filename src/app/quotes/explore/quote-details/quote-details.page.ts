import { Component, OnInit } from '@angular/core';
import {Quote} from '../../quote.model';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.page.html',
  styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {
quote: Quote = {id: 'q1', author: 'Horace', text: 'Carpe diem.', imageUrl:
    'https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?w=2000'};

  constructor() { }

  ngOnInit() {
  }

}
