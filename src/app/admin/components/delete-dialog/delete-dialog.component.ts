import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
  private sub: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number; name: string; obs$: Observable<any> }
  ) {}

  ngOnInit(): void {}

  delete() {
    this.sub = this.data.obs$.subscribe(console.log);
  }
}
