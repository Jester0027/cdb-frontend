import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FacebookSeoTagsService } from '../../services/facebook-seo-tags.service';
import { environment } from '../../../../environments/environment';
import { Event } from '../../../models/events/event.model';

@Component({
  selector: 'app-event-detail-page',
  templateUrl: './event-detail-page.component.html',
  styleUrls: ['./event-detail-page.component.scss']
})
export class EventDetailPageComponent implements OnInit {

  constructor(private titleService: Title, private fbService: FacebookSeoTagsService) {
  }

  ngOnInit(): void {

  }

  public componentLoadHandler(event: Event) {
    this.titleService.setTitle(`${event.title} - ${environment.siteName}`);
    this.fbService
      .setUrl(`${ environment.url }/evenements/${ event.slug }`)
      .setDescription(`Participer a l'évènement ${ event.title }`)
      .setTitle(`${ event.title }`)
      .setImage(`${ environment.url }/assets/images/favicon.png`);
  }

}
