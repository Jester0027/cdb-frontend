import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './new-refuge-page.component.html',
  styleUrls: ['./new-refuge-page.component.scss']
})
export class NewRefugePageComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Ajouter un refuge');
  }

}
