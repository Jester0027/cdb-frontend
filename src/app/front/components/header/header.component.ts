import { Location } from '@angular/common';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Component, OnInit, HostListener } from '@angular/core';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  dropdown = faSortDown;

  isHomePage: boolean;
  hasScrolled: boolean;
  path: string;

  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.isHomePage = this.location.path() === '';
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.url === '/';
        this.path = event.url;
      }
    });
  }

  @HostListener('window:scroll', [])
  @HostListener('window:load', [])
  onScroll() {
    this.hasScrolled = window.scrollY > 150;
  }
}
