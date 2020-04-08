import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  locationIcon = faMapMarkerAlt;
  phoneIcon = faPhone;

  constructor() {}

  ngOnInit(): void {}
}
