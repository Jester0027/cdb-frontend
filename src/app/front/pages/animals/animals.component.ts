import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FacebookSeoTagsService } from '../../services/facebook-seo-tags.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
})
export class AnimalsComponent implements OnInit {
  constructor(private titleService: Title, private fbService: FacebookSeoTagsService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(`Animaux - ${environment.siteName}`);
    this.fbService
      .setUrl(`${ environment.url }/animaux`)
      .setDescription('Page des animaux à adopter du refuge Coeur de Bouviers')
      .setTitle(`Animaux à adopter`)
      .setImage(`${ environment.url }/assets/images/favicon.png`);
  }
}
