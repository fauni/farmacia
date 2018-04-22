import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, Input } from '@angular/core';

@Component({
    selector: 'app-sidebar-header',
    templateUrl: './sidebar-header.component.html',
    styleUrls: ['./sidebar-header.component.scss']
})
export class SidebarHeaderComponent implements OnInit {

    constructor(
    ) { }

    ngOnInit() {
    }

    onLoggedout() {
      localStorage.removeItem('isLoggedinFarmacia');
      localStorage.removeAll();
    }

}
