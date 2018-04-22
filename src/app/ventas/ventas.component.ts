import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { platformBrowser } from '@angular/platform-browser';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {
  opened: Boolean = false;
  mode: string;
  shouldRun: any;
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
