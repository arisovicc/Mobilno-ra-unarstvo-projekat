import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { QuotesPageRoutingModule } from './quotes-routing.module';

import { QuotesPage } from './quotes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    QuotesPageRoutingModule
  ],
  declarations: [QuotesPage]
})
export class QuotesPageModule {}
