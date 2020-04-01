import { ContactComponent } from './pages/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FrontComponent } from './front.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'contact', component: ContactComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule {}
