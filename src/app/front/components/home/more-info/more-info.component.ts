import { Component, OnInit } from '@angular/core';
import {
  faClock,
  faInfoCircle,
  faMapMarkerAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit {
  infoIcon = faInfoCircle;
  clockIcon = faClock;
  locationIcon = faMapMarkerAlt;
  phoneIcon = faPhone;
  facebookIcon = faFacebookSquare;

  constructor() {}

  ngOnInit(): void {}
}
