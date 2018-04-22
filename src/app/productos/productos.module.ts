import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
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
    ProductosRoutingModule,
    ComponentsModule,
    MatSidenavModule,
    MatButtonModule
  ],
  declarations: [ProductosComponent]
})
export class ProductosModule { }
