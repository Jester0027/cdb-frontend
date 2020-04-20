import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Animal } from './../../../../models/animals/animal.model';
import { AnimalsService } from './../../../../services/animals.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit, OnDestroy {
  @Output() loaded = new EventEmitter();
  private animalSub: Subscription;
  animal: Animal;
  error: string = null;
  isLoading = false;
  imageUrl: string;
  imageDescription: string;

  constructor(
    private animalsService: AnimalsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.animalSub = this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          return this.animalsService.fetchOneAnimal(params.id);
        })
      )
      .subscribe((animal: Animal) => {
        this.isLoading = false;
        this.animal = animal;
        this.loaded.emit(animal);

        this.imageUrl = this.animal.pictures[0] ? this.animal.pictures[0].picture : '../../../../../assets/images/default-photo.png';
        this.imageDescription = `Photo de ${this.animal.name}`;
      }, err => {
        this.isLoading = false;
        this.error = err.message;
        this.router.navigate(['/not-found']);
      });
  }

  ngOnDestroy(): void {
    this.animalSub.unsubscribe();
  }

  clearError() {
    this.error = null;
  }
}
