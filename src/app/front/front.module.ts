import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { FrontComponent } from './front.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TransparentHeaderComponent } from './components/transparent-header/transparent-header.component';

@NgModule({
  declarations: [
    FrontComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TransparentHeaderComponent,
    WelcomeComponent
  ],
  imports: [CommonModule, FrontRoutingModule, FontAwesomeModule]
})
export class FrontModule {}
