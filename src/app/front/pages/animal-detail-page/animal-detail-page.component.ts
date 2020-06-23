import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Animal } from '../../../models/animals/animal.model';
import { FacebookSeoTagsService } from '../../services/facebook-seo-tags.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-animal-detail-page',
  templateUrl: './animal-detail-page.component.html',
  styleUrls: ['./animal-detail-page.component.scss'],
})
export class AnimalDetailPageComponent implements OnInit {
  constructor(private titleService: Title, private fbService: FacebookSeoTagsService) {
  }

  ngOnInit(): void {
  }

  componentLoadHandler(animal: Animal) {
    this.titleService.setTitle(`Page d'adoption de ${ animal.name }`);
    this.fbService
      .setTitle(`Adopter ${ animal.name }`)
      .setDescription(animal.description)
      .setUrl(`${ environment.url }/animaux/${ animal.slug }`)
      .setImage(`${ environment.url }/assets/images/favicon.png`)
    ;
  }
}
