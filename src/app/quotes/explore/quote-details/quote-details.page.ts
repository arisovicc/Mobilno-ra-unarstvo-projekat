import { Component, OnInit } from '@angular/core';
import {Quote} from "../../quote.model";
import {ActivatedRoute} from "@angular/router";
import {QuotesService} from "../../quotes.service";

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.page.html',
  styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {
  quote: Quote;

  constructor(private route: ActivatedRoute, private quotesService: QuotesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.quote = this.quotesService.getQuote(paramMap.get('quoteId'));
    });

  }
}
