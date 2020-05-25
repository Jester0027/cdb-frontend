import { Component, OnInit, Input } from '@angular/core';

import { environment } from './../../../../../environments/environment';
import { Animal } from '../../../../models/animals/animal.model';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss'],
})
export class AnimalCardComponent implements OnInit {
  @Input() animal: Animal;
  image: string;
  description: string;
  link: string;

  constructor() {}

  ngOnInit(): void {
    this.description = `Photo de ${this.animal.name}`;
    this.link = `/animaux/${this.animal.slug}`;
  }

  getSrc(name: string) {
    if (!name) {
      return '../../../../../assets/images/default-photo.png';
    }

    if (name.startsWith('http') || name.startsWith('https')) {
      return name;
    }

    return `${environment.api.replace(
      '/index.php',
      ''
    )}/images/animal_pictures/${name}`;
  }
}
