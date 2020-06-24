import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FacebookSeoTagsService } from '../../services/facebook-seo-tags.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private titleService: Title, private fbService: FacebookSeoTagsService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(`Contact - ${environment.siteName}`);
    this.fbService
      .setUrl(`${ environment.url }/contact`)
      .setDescription('Page de contact Coeur de Bouviers')
      .setTitle(`Nous contacter`)
      .setImage(`${ environment.url }/assets/images/favicon.png`);
  }
}
