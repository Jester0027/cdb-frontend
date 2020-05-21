import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './edit-event-page.component.html',
  styleUrls: ['./edit-event-page.component.scss'],
})
export class EditEventPageComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Éditer un évènement');
  }
}
