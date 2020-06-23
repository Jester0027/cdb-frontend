import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';
import { FacebookSeoTagsService } from './services/facebook-seo-tags.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['front.component.scss'],
})
export class FrontComponent implements OnInit {
  constructor(private fbService: FacebookSeoTagsService) {
  }

  ngOnInit(): void {
    this.fbService
      .setUrl(environment.url)
      .setDescription('Refuge Coeur de Bouviers')
      .setImage(`${ environment.url }/assets/images/favicon.png`)
      .setTitle('Coeur de Bouviers')
      .setAppId(environment.fbAppId)
      .setType('website')
      .setLocale('fr_BE');
  }
}
