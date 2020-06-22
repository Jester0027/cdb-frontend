import { environment } from '../../../../../environments/environment';
import { AdminEventService } from '../../../services/admin-event.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

import { Event } from '../../../../models/events/event.model';

@Component({
  templateUrl: './event-picture-form.component.html',
  styleUrls: ['./event-picture-form.component.scss'],
})
export class EventPictureFormComponent implements OnInit {
  file: File = null;
  isLoading = false;
  error: string = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { event: Event },
    private adminEventService: AdminEventService,
    private dialog: MatDialog,
    private matDialogRef: MatDialogRef<EventPictureFormComponent>
  ) {
  }

  get picture() {
    if (!this.data.event.image_url) {
      return null;
    }

    if (
      this.data.event.image_url.startsWith('https') ||
      this.data.event.image_url.startsWith('http')
    ) {
      return this.data.event.image_url;
    }

    return `${ environment.api.replace(
      '/index.php',
      ''
    ) }/images/event_pictures/${ this.data.event.image_url }`;
  }

  onSelect(event) {
    this.file = event.addedFiles[0];
  }

  onRemove() {
    this.file = null;
  }

  ngOnInit(): void {
  }

  deletePicture() {
    this.isLoading = true;
    this.adminEventService.deletePicture(this.data.event.id).subscribe(
      () => {
        this.isLoading = false;
        this.matDialogRef.close(true);
      },
      (err) => {
        this.isLoading = false;
        this.error = err.message;
      }
    );
  }

  onSubmit() {
    this.isLoading = true;
    this.adminEventService.addPicture(this.data.event.id, this.file).subscribe(
      () => {
        this.isLoading = false;
        this.matDialogRef.close(true);
      },
      (err) => {
        this.isLoading = false;
        this.error = err.message;
      }
    );
  }
}
