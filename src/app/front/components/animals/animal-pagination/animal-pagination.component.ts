import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Meta } from './../../../../models/paginated-data.model';

@Component({
  selector: 'app-animal-pagination',
  templateUrl: './animal-pagination.component.html',
  styleUrls: ['./animal-pagination.component.scss']
})
export class AnimalPaginationComponent implements OnInit {
  @Input() meta: Meta;
  @Output() changePage = new EventEmitter();
  prevPage: number;
  nextPage: number;

  constructor() { }

  ngOnInit(): void {
    this.prevPage = this.meta.currentPage - 1;
    this.nextPage = this.meta.currentPage + 1;
    console.log(this.meta);
  }

  changingPage() {
    this.changePage.emit();
  }

}
