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
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HistoryComponent } from './components/home/history/history.component';
import { ServicesBlockComponent } from './components/home/services-block/services-block.component';
import { MoreInfoComponent } from './components/home/more-info/more-info.component';
import { AnimalsSectionComponent } from './components/animals/animals-section/animals-section.component';
import { AnimalsCardComponent } from './components/animals/animals-card/animals-card.component';

@NgModule({
  declarations: [
    FrontComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    ContactFormComponent,
    ContactComponent,
    HistoryComponent,
    ServicesBlockComponent,
    MoreInfoComponent,
    AnimalsSectionComponent,
    AnimalsCardComponent
  ],
  imports: [CommonModule, FrontRoutingModule, FontAwesomeModule, ReactiveFormsModule]
})
export class FrontModule {}
