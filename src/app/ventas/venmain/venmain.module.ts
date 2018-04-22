import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { VenMainComponent } from './venmain.component';
import { VenMainRoutingModule } from './venmain-routing.module';
import { MatCardModule, MatInputModule, MatNativeDateModule, MatDatepickerModule, MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    VenMainRoutingModule,
    MatCardModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [VenMainComponent]
})
export class VenMainModule { }
