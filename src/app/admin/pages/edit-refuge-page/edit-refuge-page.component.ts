import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './edit-refuge-page.component.html',
  styleUrls: ['./edit-refuge-page.component.scss']
})
export class EditRefugePageComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Modifier un refuge');
  }

}
