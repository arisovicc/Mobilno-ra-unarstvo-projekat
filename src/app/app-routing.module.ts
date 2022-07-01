import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'quotes',
    pathMatch: 'full'
  },
  {
    //automatski se desinisala putanja quotes kada smo je napravili, preko loadChildern ucitavamo quotes modul
    //loadChildern se koristi jer koristimo koncept LazyLoading sto znaci kod modula neke komponente se ucitava tek
    //kada je to potrebno
    path: 'quotes',
    loadChildren: () => import('./quotes/quotes.module').then( m => m.QuotesPageModule)
  },
  {
    path: 'fun-facts',
    loadChildren: () => import('./fun-facts/fun-facts.module').then( m => m.FunFactsPageModule)
  },
];

@NgModule({
  imports: [
    //PreLoadingStrategy pomaze kada korisnik nije aktivan na nekoj stranici on koristi tu neaktivnost da se preuzmu
    //moduli, tj to se odvija u pozadini
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
