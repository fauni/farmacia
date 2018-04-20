import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { platformBrowser } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  events = [];
  opened: Boolean = false;
  shouldRun: any;
  mode: string;
  constructor(private platform: Platform) {
    console.log(this.platform);
    if (platform.ANDROID) {
      this.mode = 'over';
    } else {
      this.mode = 'side';
    }
  }

  ngOnInit() {
    this.opened = true;
    this.shouldRun = true;
  }

}
