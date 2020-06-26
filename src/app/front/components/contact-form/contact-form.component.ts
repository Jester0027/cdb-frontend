import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import {
  faArrowCircleLeft,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

import { AnimalsService } from '../../../services/animals.service';
import { Animal } from '../../../models/animals/animal.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;
  private animalsSub: Subscription;
  private contactSub: Subscription;
  leftArrowIcon = faArrowCircleLeft;
  paperPlaneIcon = faPaperPlane;
  userKey: string = null;
  animal: { name: string; id: string } = null;
  subject: string = null;
  errorMessage: string = null;
  isMessageSent = false;
  isLoading = false;

  form = new FormGroup({
    from: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(254),
    ]),
    subject: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(70),
    ]),
    content: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private animalsService: AnimalsService,
    private router: Router,
    private location: Location,
    private contactService: ContactService
  ) {
  }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.queryParams.subscribe((params) => {
      if (params.animal && params.id) {
        this.animal = {name: params.animal, id: params.id};
      }
    });

    if (this.animal) {
      this.animalsSub = this.animalsService
        .fetchOneAnimal(this.animal.id)
        .subscribe(
          (res: Animal) => {
            if (this.animal.name !== res.name) {
              this.setError(`l'animal ne correspond pas a l'id indiqué`);
            }
            this.subject = `[INFO] ${ this.animal.name }`;
            this.form.get('subject').setValue(this.subject);
            this.form.get('subject').disable();
          },
          () => {
            this.setError(`Une erreur inconnue est survenue`);
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
    throw new Error(msg);
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    if (this.animalsSub) {
      this.animalsSub.unsubscribe();
    }
    if (this.contactSub) {
      this.contactSub.unsubscribe();
    }
  }

  onSubmit() {
    this.isLoading = true;
    const data = {...this.form.value, userKey: this.userKey, subject: this.subject};
    this.contactSub = this.contactService.sendContact(data).subscribe(
      () => {
        this.isLoading = false;
        this.isMessageSent = true;
      },
      () => {
        this.isLoading = false;
        this.errorMessage = 'Une erreur est survenue lors du traitement du formulaire';
      }
    );
  }

  resolved(e) {
    this.userKey = e;
  }

  clearError() {
    this.errorMessage = null;
  }
}
