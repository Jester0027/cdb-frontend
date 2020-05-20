import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-picture-page',
  templateUrl: './animal-picture-page.component.html',
  styleUrls: ['./animal-picture-page.component.scss']
})
export class AnimalPicturePageComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Modifier les photos');
  }

}
