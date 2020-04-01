import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FrontRoutingModule } from './front-routing.module';
import { FrontComponent } from './front.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TransparentHeaderComponent } from './components/transparent-header/transparent-header.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    FrontComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TransparentHeaderComponent,
    WelcomeComponent,
    ContactFormComponent,
    ContactComponent
  ],
  imports: [CommonModule, FrontRoutingModule, FontAwesomeModule, ReactiveFormsModule]
})
export class FrontModule {}
