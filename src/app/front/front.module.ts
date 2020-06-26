import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

import { SharedModule } from '../shared/shared.module';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
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
import { AnimalCardComponent } from './components/animals/animal-card/animal-card.component';
import { AnimalsComponent } from './pages/animals/animals.component';
import { AnimalDetailComponent } from './components/animals/animal-detail/animal-detail.component';
import { AnimalDetailPageComponent } from './pages/animal-detail-page/animal-detail-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { EventsSectionComponent } from './components/events/events-section/events-section.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { EventDetailComponent } from './components/events/event-detail/event-detail.component';
import { EventDetailPageComponent } from './pages/event-detail-page/event-detail-page.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DonationPageComponent } from './pages/donation-page/donation-page.component';
import { AgmCoreModule } from '@agm/core';
import { EventRegistrationFormComponent } from './components/events/event-registration-form/event-registration-form.component';
import { CookieConsentComponent } from './components/cookie-consent/cookie-consent.component';

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
    AnimalsComponent,
    AnimalCardComponent,
    AnimalDetailComponent,
    AnimalDetailPageComponent,
    NotFoundComponent,
    NotFoundPageComponent,
    EventsPageComponent,
    EventsSectionComponent,
    PaginatorComponent,
    EventDetailComponent,
    EventDetailPageComponent,
    SidenavComponent,
    DonationPageComponent,
    EventRegistrationFormComponent,
    CookieConsentComponent,
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    SharedModule,
    RecaptchaModule,
    AgmCoreModule
  ],
})
export class FrontModule {
}
