import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './new-animal-category-page.component.html',
  styleUrls: ['./new-animal-category-page.component.scss']
})
export class NewAnimalCategoryPageComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Ajouter une catégorie d\'animaux');
  }

}
