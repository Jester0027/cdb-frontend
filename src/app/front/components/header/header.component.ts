import { Location } from '@angular/common';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Component, OnInit, HostListener } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public open = faBars;
  public isHomePage: boolean;
  public hasScrolled: boolean;
  public path: string;
  public isNavOpen = false;

  public constructor(private router: Router, private location: Location) {}

  public ngOnInit(): void {
    // @ts-ignore
    this.isHomePage = '/' === this.location._platformLocation.pathname;
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // @ts-ignore
        this.isHomePage = '/' === this.location._platformLocation.pathname;
        this.path = event.url;
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
