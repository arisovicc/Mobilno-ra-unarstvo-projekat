import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ExplorePageRoutingModule } from './explore-routing.module';
import { ExplorePage } from './explore.page';
import {QuoteElementComponent} from '../quote-element/quote-element.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ExplorePageRoutingModule
  ],
  declarations: [ExplorePage, QuoteElementComponent]
})
export class ExplorePageModule {}
