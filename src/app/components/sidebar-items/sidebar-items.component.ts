import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, Input } from '@angular/core';

@Component({
    selector: 'app-sidebar-items',
    templateUrl: './sidebar-items.component.html',
    styleUrls: ['./sidebar-items.component.scss']
})
export class SidebarItemsComponent implements OnInit {

    constructor(
    ) { }

    ngOnInit() {
    }

    onLoggedout() {
      localStorage.removeItem('isLoggedinFarmacia');
      localStorage.removeAll();
    }

}
