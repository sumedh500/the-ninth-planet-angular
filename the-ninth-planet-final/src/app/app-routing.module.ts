import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ItemCreateComponent } from './components/item-create/item-create.component';
import { ItemviewComponent } from './components/itemview/itemview.component';
import { BuyProductComponent } from './components/buy-product/buy-product.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'itemcreate', component: ItemCreateComponent },
  { path: 'item/:id', component: ItemviewComponent },
  { path: 'buyproduct', component: BuyProductComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
