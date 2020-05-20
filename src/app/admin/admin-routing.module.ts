import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAnimalComponent } from './pages/edit-animal/edit-animal.component';
import { NewAnimalComponent } from './pages/new-animal/new-animal.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminGuard } from './guards/admin.guard';
import { RefugesPageComponent } from './pages/refuges-page/refuges-page.component';
import { AnimalCategoriesPageComponent } from './pages/animal-categories-page/animal-categories-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AdminComponent } from './admin.component';
import { AnimalsPageComponent } from './pages/animals-page/animals-page.component';
import { AnimalPicturePageComponent } from './pages/animal-picture-page/animal-picture-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      { path: '', component: MainPageComponent },
      { path: 'animaux', component: AnimalsPageComponent },
      { path: 'animaux/ajouter', component: NewAnimalComponent },
      { path: 'animaux/editer/:id', component: EditAnimalComponent },
      { path: 'animaux/photos/:id', component: AnimalPicturePageComponent },
      { path: 'evenements', component: EventsPageComponent },
      { path: 'categories', component: AnimalCategoriesPageComponent },
      { path: 'refuges', component: RefugesPageComponent },
      { path: '**', component: NotFoundPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
