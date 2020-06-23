import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './event-themes-page.component.html',
  styleUrls: ['./event-themes-page.component.scss']
})
export class EventThemesPageComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Thèmes d\'évènements');
  }

}
