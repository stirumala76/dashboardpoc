import {  ChangeDetectionStrategy, Component, OnInit,HostBinding } from '@angular/core';
import { NbSidebarService,NbMenuItem } from '@nebular/theme';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MENU_ITEMS } from './commons/constants/ims-dashboard.constants';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
      trigger('indicatorRotate', [
        state('collapsed', style({transform: 'rotate(0deg)'})),
        state('expanded', style({transform: 'rotate(180deg)'})),
        transition('expanded <=> collapsed',
          animate('500ms cubic-bezier(0.4,0.0,0.2,1)')
        ),
      ])
    ]
})
export class AppComponent implements OnInit {
  title = 'ims-dashboard';
  expanded: boolean;
  items=MENU_ITEMS;
  test:string
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  constructor(private sidebarService: NbSidebarService) {
   
   console.log(JSON.stringify(this.items));
   this.test=JSON.stringify(this.items);
  }

  public toggle() {
    this.expanded = !this.expanded;
    this.sidebarService.toggle();
  }

  ngOnInit() {
  }
}