import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
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
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

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
import { AnimalPicturePageComponent } from './pages/animal-picture-page/animal-picture-page.component';
import { AnimalPictureFormComponent } from './components/animals/animal-picture-form/animal-picture-form.component';
import { EventsDisplayComponent } from './components/events/events-display/events-display.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { EventFormComponent } from './components/events/event-form/event-form.component';
import { NewEventPageComponent } from './pages/new-event-page/new-event-page.component';
import { EditEventPageComponent } from './pages/edit-event-page/edit-event-page.component';
import { AnimalCategoriesSectionComponent } from './components/animal-categories/animal-categories-section/animal-categories-section.component';
import { AnimalCategoryFormComponent } from './components/animal-categories/animal-category-form/animal-category-form.component';
import { RefugesSectionComponent } from './components/refuges/refuges-section/refuges-section.component';
import { RefugesFormComponent } from './components/refuges/refuges-form/refuges-form.component';
import { NewRefugePageComponent } from './pages/new-refuge-page/new-refuge-page.component';
import { EditRefugePageComponent } from './pages/edit-refuge-page/edit-refuge-page.component';

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
    AnimalPicturePageComponent,
    AnimalPictureFormComponent,
    EventsDisplayComponent,
    DeleteDialogComponent,
    EventFormComponent,
    NewEventPageComponent,
    EditEventPageComponent,
    AnimalCategoriesSectionComponent,
    AnimalCategoryFormComponent,
    RefugesSectionComponent,
    RefugesFormComponent,
    NewRefugePageComponent,
    EditRefugePageComponent,
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
    MatTableModule,
    NgxDropzoneModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    MatGridListModule,
    AgmCoreModule,
  ],
  providers: [DatePipe],
})
export class AdminModule {}
