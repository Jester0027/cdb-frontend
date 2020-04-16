import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

import { Meta } from './../../../../models/paginated-data.model';

@Component({
  selector: 'app-animal-pagination',
  templateUrl: './animal-pagination.component.html',
  styleUrls: ['./animal-pagination.component.scss'],
})
export class AnimalPaginationComponent implements OnInit {
  @Input() meta: Meta;
  @Output() changePage = new EventEmitter();
  prevPage: number;
  nextPage: number;

  links: { pageNumber: number; query: {} }[] = [];

  leftIcon = faAngleDoubleLeft;
  rightIcon = faAngleDoubleRight;

  constructor() {}

  ngOnInit(): void {
    this.prevPage = this.meta.currentPage - 1;
    this.nextPage = this.meta.currentPage + 1;
    console.log(this.meta);
    for (let i = 1; i <= this.meta.maxPages; i++) {
      this.links.push({ pageNumber: i, query: { page: i } });
    }

    console.log(this.links);
  }

  changingPage() {
    this.changePage.emit();
  }
}
