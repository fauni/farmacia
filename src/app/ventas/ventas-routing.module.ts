import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentasComponent } from './ventas.component';

const routes: Routes = [
    {
        path: '', component: VentasComponent,
        children: [
            { path: '', loadChildren: './venmain/venmain.module#VenMainModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VentasRoutingModule {
}
