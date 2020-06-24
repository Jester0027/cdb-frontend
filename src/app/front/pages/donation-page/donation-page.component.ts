import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FacebookSeoTagsService } from '../../services/facebook-seo-tags.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-donation-page',
  templateUrl: './donation-page.component.html',
  styleUrls: ['./donation-page.component.scss']
})
export class DonationPageComponent implements OnInit {

  constructor(private titleService: Title, private fbService: FacebookSeoTagsService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(`Faire un don - ${environment.siteName}`);
    this.fbService
      .setUrl(`${ environment.url }/don/`)
      .setDescription(`Faire un don à l\'ASBL Coeur de Bouviers`)
      .setTitle(`Faire un don`)
      .setImage(`${ environment.url }/assets/images/favicon.png`);
  }

}
