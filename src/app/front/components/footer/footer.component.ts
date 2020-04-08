import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  locationIcon = faMapMarkerAlt;
  phoneIcon = faPhone;

  constructor() { }

  ngOnInit(): void {
  }

}
