import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './new-event-page.component.html',
  styleUrls: ['./new-event-page.component.scss']
})
export class NewEventPageComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Ajouter un évènement');
  }

}
