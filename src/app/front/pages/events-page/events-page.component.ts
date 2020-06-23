import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FacebookSeoTagsService } from '../../services/facebook-seo-tags.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

  constructor(private titleService: Title, private fbService: FacebookSeoTagsService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Évènements');
    this.fbService
      .setUrl(`${ environment.url }/evenements`)
      .setDescription('Évènements de Coeur de Bouviers')
      .setTitle(`Évènements`)
      .setImage(`${ environment.url }/assets/images/favicon.png`);
  }

}
