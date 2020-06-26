import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import {
  faClock,
  faInfoCircle,
  faMapMarkerAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { isPlatformBrowser } from '@angular/common';

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
  public browser = false;
  public coords = {
    lat: 50.595747,
    lng: 3.471999
  };

  constructor(@Inject(PLATFORM_ID) private platformId) {}

  ngOnInit(): void {
    this.browser = isPlatformBrowser(this.platformId);
  }
}
