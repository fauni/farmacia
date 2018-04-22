import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenMainComponent } from './venmain.component';

const routes: Routes = [
    {
        path: '', component: VenMainComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VenMainRoutingModule {
}
