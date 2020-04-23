import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

import { Meta } from './../../../models/paginated-data.model';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() meta: Meta;
  @Input() route: string[];
  @Output() changePage = new EventEmitter();
  prevPage: number;
  nextPage: number;

  links: { pageNumber: number; query: {} }[] = [];
  pages: Array<any>;

  leftIcon = faAngleDoubleLeft;
  rightIcon = faAngleDoubleRight;

  constructor() {}

  ngOnInit(): void {
    this.prevPage = this.meta.currentPage - 1;
    this.nextPage = this.meta.currentPage + 1;
    this.pages = new Array(this.meta.maxPages);
  }

  changingPage() {
    this.changePage.emit();
  }

}
