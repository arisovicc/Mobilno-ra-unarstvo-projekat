import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-fun-facts',
  templateUrl: './fun-facts.page.html',
  styleUrls: ['./fun-facts.page.scss'],
})
export class FunFactsPage implements OnInit,OnDestroy {

  constructor() {
    console.log('constructor');
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
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
