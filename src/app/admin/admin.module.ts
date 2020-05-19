import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from './../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { AnimalsPageComponent } from './pages/animals-page/animals-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { AnimalCategoriesPageComponent } from './pages/animal-categories-page/animal-categories-page.component';
import { RefugesPageComponent } from './pages/refuges-page/refuges-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginComponent } from './components/login/login.component';
import { AnimalsDisplayComponent } from './components/animals/animals-display/animals-display.component';
import { NewAnimalComponent } from './pages/new-animal/new-animal.component';
import { EditAnimalComponent } from './pages/edit-animal/edit-animal.component';
import { AnimalFormComponent } from './components/animals/animal-form/animal-form.component';

@NgModule({
  declarations: [
    AdminComponent,
    MainNavComponent,
    AnimalsPageComponent,
    NotFoundPageComponent,
    MainPageComponent,
    EventsPageComponent,
    AnimalCategoriesPageComponent,
    RefugesPageComponent,
    LoginPageComponent,
    LoginComponent,
    AnimalsDisplayComponent,
    NewAnimalComponent,
    EditAnimalComponent,
    AnimalFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
})
export class AdminModule {}
