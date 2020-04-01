import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(''),
    subject: new FormControl(''),
    content: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // this.form.controls.forEach(element => {
    //   console.log(element.value);
    // });
    // tslint:disable-next-line: forin
    for (const control in this.form.value) {
      console.log(`${control} : ${this.form.value[control]}`);
    }
  }
}
