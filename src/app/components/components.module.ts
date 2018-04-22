import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule, MatDividerModule, MatListModule } from '@angular/material';
import { SidebarItemsComponent } from './sidebar-items/sidebar-items.component';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
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
        MatIconModule,
        MatDividerModule,
        MatListModule
    ],
    declarations: [ComponentsComponent, SidebarComponent, HeaderComponent, SidebarItemsComponent, SidebarHeaderComponent],
    exports: [HeaderComponent, SidebarComponent, SidebarItemsComponent, SidebarHeaderComponent]
})
export class ComponentsModule {}
