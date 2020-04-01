import { Component, OnInit } from '@angular/core';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transparent-header',
  templateUrl: './transparent-header.component.html',
  styleUrls: ['./transparent-header.component.scss']
})
export class TransparentHeaderComponent implements OnInit {
  dropdown = faSortDown;

  constructor() { }

  ngOnInit(): void {
  }

}
