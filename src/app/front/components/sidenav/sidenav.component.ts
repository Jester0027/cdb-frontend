import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faBars, faTimes, faSortDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public openIcon = faBars;
  public closeIcon = faTimes;
  public dropdownIcon = faSortDown;
  @Input() public isOpen = false;
  @Output() public clear = new EventEmitter();

  public constructor() { }

  ngOnInit(): void {
  }

  public closeNav() {
    this.isOpen = false;
    this.clear.emit();
  }

}
