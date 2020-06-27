import { Component, OnInit } from '@angular/core';
import { faDoorOpen, faHome, faLifeRing } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services-block',
  templateUrl: './services-block.component.html',
  styleUrls: ['./services-block.component.scss']
})
export class ServicesBlockComponent implements OnInit {
  public doorOpenIcon = faDoorOpen;
  public homeIcon = faHome;
  public lifeRingIcon = faLifeRing;

  constructor() { }

  ngOnInit(): void {
  }

}
