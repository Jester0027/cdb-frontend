import { switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AnimalsService } from './../../../../services/animals.service';
import { Animal } from './../../../../models/animals/animal.model';
import { Meta, PaginatedData } from './../../../../models/paginated-data.model';

@Component({
  selector: 'app-animals-section',
  templateUrl: './animals-section.component.html',
  styleUrls: ['./animals-section.component.scss'],
})
export class AnimalsSectionComponent implements OnInit, OnDestroy {
  private animalsSub: Subscription;

  animals: Animal[];
  meta: Meta;
  isLoading = false;
  error: string = null;

  constructor(
    private animalsService: AnimalsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.animalsSub = this.activatedRoute.queryParams
      .pipe(
        tap(() => (this.isLoading = true)),
        switchMap((params) => this.animalsService.fetchAnimals(params.page))
      )
      .subscribe(
        (res: PaginatedData<Animal>) => {
          this.isLoading = false;
          this.animals = res.data;
          this.meta = res.meta;
        },
        (error: Error) => {
          this.isLoading = false;
          this.error = error.message;
          this.router.navigate(['/not-found']);
        }
      );
  }

  setLoader() {
    this.isLoading = true;
  }

  clearError() {
    this.error = null;
  }

  ngOnDestroy(): void {
    this.animalsSub.unsubscribe();
  }
}
