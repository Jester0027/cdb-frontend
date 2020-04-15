import { Animal } from '../../../../models/animals/animal.model';
import { Component, OnInit, Input } from '@angular/core';

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
    this.image = this.animal.pictures[0] ? this.animal.pictures[0].picture : '../../../../../assets/images/default-photo.png';
    this.description = `Photo de ${this.animal.name}`;
    this.link = `/animaux/${this.animal.id}`;
  }
}
