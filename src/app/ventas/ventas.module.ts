import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasRoutingModule } from './ventas-routing.module';
import { VentasComponent } from './ventas.component';
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
    VentasRoutingModule,
    ComponentsModule,
    MatSidenavModule,
    MatButtonModule
  ],
  declarations: [VentasComponent]
})
export class VentasModule { }
