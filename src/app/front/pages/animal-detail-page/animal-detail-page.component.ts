import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { Animal } from './../../../models/animals/animal.model';
import { FacebookSeoTagsService } from './../../services/facebook-seo-tags.service';

@Component({
  selector: 'app-animal-detail-page',
  templateUrl: './animal-detail-page.component.html',
  styleUrls: ['./animal-detail-page.component.scss'],
})
export class AnimalDetailPageComponent implements OnInit {
  constructor(private fbService: FacebookSeoTagsService) {}

  ngOnInit(): void {}

  componentLoadHandler(animal: Animal) {
    this.fbService
      .setTitle(`Page d'adoption de ${animal.name}`)
      .setDescription(animal.description)
      .setType('article');
  }
}
