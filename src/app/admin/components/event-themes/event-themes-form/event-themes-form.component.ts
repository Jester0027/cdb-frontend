import { AdminEventThemesService } from '../../../services/admin-event-themes.service';
import { EventTheme } from '../../../../models/events/event-theme.model';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EventThemesService } from '../../../../services/event-themes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  templateUrl: './event-themes-form.component.html',
  styleUrls: ['./event-themes-form.component.scss'],
})
export class EventThemesFormComponent implements OnInit {
  form: FormGroup;
  isLoading = false;
  editMode = false;
  error: string = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id?: string; name?: string },
    private fb: FormBuilder,
    private eventThemesService: EventThemesService,
    private adminEventThemesService: AdminEventThemesService,
    private dialog: MatDialog,
    private matDialogRef: MatDialogRef<EventThemesFormComponent>
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.form = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(255),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(2550),
        ],
      ],
    });

    if (this.data.id) {
      this.editMode = true;
      this.eventThemesService
        .fetchOneEventTheme(this.data.id)
        .subscribe((theme: EventTheme) => {
          this.isLoading = false;
          this.form.get('name').setValue(theme.name);
          this.form.get('description').setValue(theme.description);
        });
    } else {
      this.isLoading = false;
    }
  }

  onSubmit() {
    this.isLoading = true;
    if (this.editMode) {
      this.adminEventThemesService
        .update(this.data.id, this.form.value)
        .subscribe(
          () => {
            this.error = null;
            this.isLoading = false;
            this.matDialogRef.close(true);
          },
          (err) => {
            this.isLoading = false;
            this.error = err.message;
          }
        );
    } else {
      this.adminEventThemesService.add(this.form.value).subscribe(
        () => {
          this.error = null;
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
}
