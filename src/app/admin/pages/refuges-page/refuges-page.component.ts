import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refuges-page',
  templateUrl: './refuges-page.component.html',
  styleUrls: ['./refuges-page.component.scss']
})
export class RefugesPageComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Refuges');
  }

}
