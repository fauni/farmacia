import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
    { path: '', loadChildren: './home/home.module#HomeModule'},
    { path: 'home', loadChildren: './home/home.module#HomeModule'},
    { path: 'login', loadChildren: './login/login.module#LoginModule'},
    { path: 'error', loadChildren: 'app/server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: 'app/access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: 'app/not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        {
            useHash: true,
            preloadingStrategy: PreloadAllModules
        }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule {}
