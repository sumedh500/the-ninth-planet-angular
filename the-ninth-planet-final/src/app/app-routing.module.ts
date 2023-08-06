import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ItemCreateComponent } from './components/item-create/item-create.component';
import { ItemviewComponent } from './components/itemview/itemview.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'itemcreate', component: ItemCreateComponent },
  { path: 'item/:id', component: ItemviewComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
