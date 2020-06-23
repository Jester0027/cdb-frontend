import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

import { FacebookSeoTagsService } from '../../services/facebook-seo-tags.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title, private fbService: FacebookSeoTagsService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Accueil');
    this.fbService
      .setUrl(`${ environment.url }`)
      .setDescription('Site de l\'ASBL Coeur de Bouviers')
      .setTitle(`Coeur de Bouviers`)
      .setImage(`${ environment.url }/assets/images/favicon.png`);
  }
}
