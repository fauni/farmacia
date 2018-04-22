import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Routes, Router } from '@angular/router';

@Component({
    selector: 'app-sidebar-items',
    templateUrl: './sidebar-items.component.html',
    styleUrls: ['./sidebar-items.component.scss']
})
export class SidebarItemsComponent implements OnInit {

    constructor(private routes: Router
    ) { }

    ngOnInit() {
    }

    onLoggedout() {
      localStorage.removeItem('isLoggedinFarmacia');
      localStorage.removeAll();
    }

    openApp(nameurl: string) {
        this.routes.navigate(['/' + nameurl]);
    }
}
