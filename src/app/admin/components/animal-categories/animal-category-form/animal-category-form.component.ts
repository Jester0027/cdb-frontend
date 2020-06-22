import { AdminAnimalCategoriesService } from '../../../services/admin-animal-categories.service';
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-animal-category-form',
  templateUrl: './animal-category-form.component.html',
  styleUrls: ['./animal-category-form.component.scss'],
})
export class AnimalCategoryFormComponent implements OnInit, OnDestroy {
  private animalCategoriesSub: Subscription;
  form: FormGroup;
  errorMessage: string = null;
  hasUploaded = false;
  isLoading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id?: string; name?: string },
    private adminAnimalCategoriesService: AdminAnimalCategoriesService,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<AnimalCategoryFormComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(255),
        ],
      ],
    });
  }

  ngOnDestroy(): void {
    if (this.animalCategoriesSub) {
      this.animalCategoriesSub.unsubscribe();
    }
  }

  onSubmit() {
    this.isLoading = true;
    if (this.data.id && this.data.name) {
      this.animalCategoriesSub = this.adminAnimalCategoriesService
        .update(this.data.id, this.form.value)
        .subscribe(
          () => {
            this.isLoading = false;
            this.matDialogRef.close(true);
          },
          (err) => {
            this.isLoading = false;
            this.errorMessage = err.message;
          }
        );
    } else {
      this.animalCategoriesSub = this.adminAnimalCategoriesService
        .add(this.form.value)
        .subscribe(
          () => {
            this.isLoading = false;
            this.matDialogRef.close(true);
          },
          (err) => {
            this.isLoading = false;
            this.errorMessage = err.message;
          }
        );
    }
  }
}
