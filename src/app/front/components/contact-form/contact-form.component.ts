import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { faArrowCircleLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { AnimalsService } from './../../../services/animals.service';
import { Animal } from './../../../models/animals/animal.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;
  private animalsSub: Subscription;
  leftArrowIcon = faArrowCircleLeft;
  paperPlaneIcon = faPaperPlane;
  animal: { name: string; id: number | string } = null;
  subject: string = null;
  errorMessage: string = null;

  form = new FormGroup({
    email: new FormControl(''),
    subject: new FormControl(''),
    content: new FormControl(''),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private animalsService: AnimalsService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.queryParams.subscribe((params) => {
      if (params.animal && params.id) {
        this.animal = { name: params.animal, id: params.id };
      }
    });

    if (this.animal) {
      this.animalsSub = this.animalsService
        .fetchOneAnimal(+this.animal.id)
        .subscribe(
          (res: Animal) => {
            if (this.animal.name !== res.name) {
              this.setError(`l'animal ne correspond pas a l'id indiqué`);
            }
            this.subject = `[INFO] ${this.animal.name}`;
            this.form.controls.subject.setValue(this.subject);
            this.form.controls.subject.disable();
          },
          (err) => {
            this.setError('Une erreur inconnue est survenue');
          }
        );
    }
  }

  navigateToLastPage() {
    this.location.back();
  }

  setError(msg: string) {
    this.animal = null;
    this.subject = null;
    this.router.navigate(['/contact']);
    this.errorMessage = msg;
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    if (this.animalsSub) {
      this.animalsSub.unsubscribe();
    }
  }

  onSubmit() {
    // tslint:disable-next-line: forin
    for (const [key, control] of Object.entries(this.form.controls)) {
      console.log(`${key} : ${control.value}`);
    }
    // console.log(this.form);
  }

  clearError() {
    this.errorMessage = null;
  }
}
