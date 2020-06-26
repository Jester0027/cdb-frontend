import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

import { environment } from '../../environments/environment';
import { FacebookSeoTagsService } from './services/facebook-seo-tags.service';
import { CookieService } from '../services/cookie.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['front.component.scss'],
})
export class FrontComponent implements OnInit {
  public hasCookieConsent = true;

  public constructor(
    private fbService: FacebookSeoTagsService,
    private cookieService: CookieService,
    @Inject(PLATFORM_ID) private platformId
  ) {
  }

  public ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.hasCookieConsent = !!this.cookieService.getCookie('cdb_cookie_consent');
    }
    this.fbService
      .setUrl(environment.url)
      .setDescription('Refuge Coeur de Bouviers')
      .setImage(`${ environment.url }/assets/images/favicon.png`)
      .setTitle('Coeur de Bouviers')
      .setAppId(environment.fbAppId)
      .setType('website')
      .setLocale('fr_BE');
  }

  public setCookieConsent() {
    this.cookieService.setCookie('cdb_cookie_consent', 'true', 365);
    this.hasCookieConsent = true;
  }
}
