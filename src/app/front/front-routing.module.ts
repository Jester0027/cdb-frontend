import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AnimalDetailPageComponent } from './pages/animal-detail-page/animal-detail-page.component';
import { AnimalsComponent } from './pages/animals/animals.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FrontComponent } from './front.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      {
        path: 'animaux',
        component: AnimalsComponent,
      },
      { path: 'animaux/:id', component: AnimalDetailPageComponent },
      { path: '**', component: NotFoundPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontRoutingModule {}
