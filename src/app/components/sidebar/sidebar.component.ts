import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, Input } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    constructor(
    ) { }

    ngOnInit() {
    }

    onLoggedout() {
      localStorage.removeItem('isLoggedinFarmacia');
      localStorage.removeAll();
    }

}
