import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material';
import { MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatMenuModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [ComponentsComponent, SidebarComponent, HeaderComponent],
    exports: [HeaderComponent, SidebarComponent]
})
export class ComponentsModule {}
