import {
  Component,
  Input,
  Output,
  EventEmitter,
  Inject,
  OnChanges,
} from '@angular/core';
import { faTimes, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnChanges {
  public closeIcon = faTimes;
  public dropdownIcon = faSortDown;
  @Input() public isOpen = false;
  @Output() public isOpenChange = new EventEmitter();

  public constructor(@Inject(DOCUMENT) private document: Document) {}

  public ngOnChanges(): void {
    if (this.isOpen === true) {
      this.document.body.style.overflow = 'hidden';
    } else if (this.isOpen === false) {
      this.document.body.style.overflow = 'auto';
    }
  }

  public closeNav() {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }
}
