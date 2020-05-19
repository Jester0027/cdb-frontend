import { AuthService } from './../../services/auth.service';
import { Title } from '@angular/platform-browser';
import { Component, OnChanges, OnInit, AfterContentChecked } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserRoles } from 'src/app/models/user.model';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit, AfterContentChecked {
  title: string;
  isAdmin: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private titleService: Title,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.getUser().roles.includes(UserRoles.SUPERADMIN);
  }

  ngAfterContentChecked(): void {
    this.title = this.titleService.getTitle();
  }

  logout() {
    this.authService.logout();
  }
}
