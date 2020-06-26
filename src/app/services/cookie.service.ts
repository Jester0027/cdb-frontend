import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId
  ) {
  }

  private get isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  public getCookie(cookieName: string): string | null {
    if (!this.isBrowser) {
      return null;
    }
    const name = cookieName + '=';
    const decodedCookie = decodeURIComponent(this.document.cookie);
    const ca = decodedCookie.split(';');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }

  public setCookie(
    cookieName: string,
    cookieValue: string | number | boolean,
    daysUntilExpiration: number
  ): void | null {
    if (!this.isBrowser) {
      return null;
    }
    const d = new Date();
    d.setTime(d.getTime() + (daysUntilExpiration * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    this.document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/';
  }

}
