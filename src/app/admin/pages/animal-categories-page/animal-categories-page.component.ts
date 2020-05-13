import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-categories-page',
  templateUrl: './animal-categories-page.component.html',
  styleUrls: ['./animal-categories-page.component.scss']
})
export class AnimalCategoriesPageComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Catégories d\'animaux');
  }

}
