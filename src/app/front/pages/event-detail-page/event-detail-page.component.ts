import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FacebookSeoTagsService } from '../../services/facebook-seo-tags.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-event-detail-page',
  templateUrl: './event-detail-page.component.html',
  styleUrls: ['./event-detail-page.component.scss']
})
export class EventDetailPageComponent implements OnInit {

  constructor(private titleService: Title, private fbService: FacebookSeoTagsService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('');
    this.fbService
      .setUrl(`${ environment.url }/evenements/`)
      .setDescription(`Participer a l'évènement ${ '' }`)
      .setTitle(`${ '' }`)
      .setImage(`${ environment.url }/assets/images/favicon.png`);
  }

}
