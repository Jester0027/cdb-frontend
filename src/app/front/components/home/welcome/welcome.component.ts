import { Component } from '@angular/core';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  locationIcon = faMapMarkerAlt;
  phoneIcon = faPhone;

  constructor() {
  }
}
