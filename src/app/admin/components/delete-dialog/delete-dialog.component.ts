import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
  private sub: Subscription;
  public isLoading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number; name: string; obs$: Observable<any> },
    private matDialogRef: MatDialogRef<DeleteDialogComponent>
  ) {}

  ngOnInit(): void {}

  delete() {
    this.isLoading = true;
    this.sub = this.data.obs$.subscribe(() => {
      this.isLoading = false;
      this.matDialogRef.close(true);
    });
  }
}
