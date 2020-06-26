import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss']
})
export class CookieConsentComponent implements OnInit {
  @Output() public approved = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public approveCookieConsent() {
    this.approved.emit(true);
  }

}
