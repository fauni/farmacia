import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../components/components.module';
import {
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatTabsModule,
  MatCheckboxModule,
  MatButtonModule,
  MatDividerModule,
  MatListModule
} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';


import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
