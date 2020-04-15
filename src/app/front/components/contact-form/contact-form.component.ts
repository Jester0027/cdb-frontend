import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;
  subject: string = null;
  id: string = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.animal) {
        this.subject = `[INFO] ${params.animal}`;
        this.id = params.id;
      }
    });

    this.form = new FormGroup({
      email: new FormControl(''),
      subject: new FormControl({value: this.subject, disabled: this.subject}),
      content: new FormControl('')
    });
  }

  onSubmit() {
    // tslint:disable-next-line: forin
    for (const control in this.form.value) {
      console.log(`${control} : ${this.form.value[control]}`);
    }
  }
}
