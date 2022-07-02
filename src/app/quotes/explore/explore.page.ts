import { Component, OnInit } from '@angular/core';
import {Quote} from "../quote.model";
import {QuotesService} from "../quotes.service";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
 // quotes: Quote[] = [
 //   {id: 'q1', author: 'Horace', text: 'Carpe diem.', imageUrl:
  //      'https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?w=2000'},
   // {id: 'q2', author: 'Horace', text: 'Carpe diem.', imageUrl:
 //       'https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?w=2000'}
 // ];

  quotes: Quote[];

  constructor(private quotesService: QuotesService) {
    console.log('constructor');
    this.quotes = this.quotesService.quotes;
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
