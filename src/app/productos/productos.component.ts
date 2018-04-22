import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { platformBrowser } from '@angular/platform-browser';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
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
