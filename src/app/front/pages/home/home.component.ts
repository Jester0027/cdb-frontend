import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

import { AnimalsService } from './../../../services/animals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Accueil');
  }
}
