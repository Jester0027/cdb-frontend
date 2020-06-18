import { Location } from '@angular/common';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Component, OnInit, HostListener } from '@angular/core';
import { faSortDown, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public dropdown = faSortDown;
  public open = faBars;

  public isHomePage: boolean;
  public hasScrolled: boolean;
  public path: string;
  public isNavOpen = false;

  public constructor(private router: Router, private location: Location) {}

  public ngOnInit(): void {
    this.isHomePage = this.location.path() === '';
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.url === '/' || event.url.startsWith('/#');
        this.path = event.url;
        console.log(event.url);
      }
    });
  }

  @HostListener('window:scroll', [])
  @HostListener('window:load', [])
  public onScroll() {
    this.hasScrolled = window.scrollY > 50;
  }

  public openNav() {
    this.isNavOpen = true;
  }
}
