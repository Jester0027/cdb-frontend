import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './edit-animal-category-page.component.html',
  styleUrls: ['./edit-animal-category-page.component.scss']
})
export class EditAnimalCategoryPageComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Modifier une catégorie d\'animaux');
  }

}
