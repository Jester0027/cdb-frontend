import { AdminAnimalCategoriesService } from './../../../services/admin-animal-categories.service';
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
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
    @Inject(MAT_DIALOG_DATA) public data: { id?: number; name?: string },
    private adminAnimalCategoriesService: AdminAnimalCategoriesService,
    private dialog: MatDialog,
    private fb: FormBuilder
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
          (res) => {
            this.isLoading = false;
            this.dialog.closeAll();
            console.log(res);
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
          (res) => {
            this.isLoading = false;
            this.dialog.closeAll();
            console.log(res);
          },
          (err) => {
            this.isLoading = false;
            this.errorMessage = err.message;
          }
        );
    }
  }
}
