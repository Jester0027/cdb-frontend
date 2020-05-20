import { tap, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { faImage } from '@fortawesome/free-solid-svg-icons';

import { PaginatedData, Meta } from './../../../../models/paginated-data.model';
import { Subscription } from 'rxjs';
import { Animal } from './../../../../models/animals/animal.model';
import { AnimalsService } from './../../../../services/animals.service';

@Component({
  selector: 'app-animals-display',
  templateUrl: './animals-display.component.html',
  styleUrls: ['./animals-display.component.scss'],
})
export class AnimalsDisplayComponent implements OnInit, OnDestroy {
  private animalsServiceSub: Subscription;
  animals: Animal[];
  meta: Meta;
  isLoading = false;
  error: string;
  page: number;

  imageIcon = faImage;

  constructor(
    private animalsService: AnimalsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isLoading = true;

    this.animalsServiceSub = this.activatedRoute.queryParams
      .pipe(
        tap(() => (this.isLoading = true)),
        switchMap((params) => this.animalsService.fetchAnimals(+params.page))
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
          this.router.navigate(['/admin', 'not-found']);
        }
      );
  }

  ngOnDestroy(): void {
    if (this.animalsServiceSub) {
      this.animalsServiceSub.unsubscribe();
    }
  }

  onPageChange(e) {
    console.log(e);
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { page: e.pageIndex + 1 },
      queryParamsHandling: 'merge',
    });
  }
}
