import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ItemCreateComponent } from './components/item-create/item-create.component';

const routes: Routes = [
  // { path: '/landing', component: LandingPageComponent },
  // { path: '/itemcreate', component: ItemCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
