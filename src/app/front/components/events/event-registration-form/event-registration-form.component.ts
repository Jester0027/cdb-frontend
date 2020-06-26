import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../../../models/events/event.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../../services/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event-registration-form',
  templateUrl: './event-registration-form.component.html',
  styleUrls: ['./event-registration-form.component.scss']
})
export class EventRegistrationFormComponent implements OnInit {
  private contactSub: Subscription;
  public userKey: string = null;
  @Input() public event: Event;
  public form: FormGroup;
  public isLoading = false;
  public messageSent = false;
  public error: string = null;

  public constructor(private fb: FormBuilder, private contactService: ContactService) {
  }

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      from: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      phone: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  public resolved(e) {
    this.userKey = e;
  }

  public onSubmit() {
    this.isLoading = true;
    const payload = {
      ...this.form.value,
      userKey: this.userKey,
      eventSlug: this.event.slug
    };

    console.log(payload);
    this.contactSub = this.contactService.sendEventRegistration(payload).subscribe(() => {
      this.isLoading = false;
      this.messageSent = true;
    }, () => {
      this.error = 'Une erreur est survenue lors de l\'envoi du formulaire';
      this.isLoading = false;
    });
  }

}
