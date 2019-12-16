/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { ErrorModule } from './error.module';

/* Containers */
import * as errorContainers from './containers';

/* Guards */
import * as errorGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '404',
    },
    {
        path: '401',
        canActivate: [],
        component: errorContainers.Error401Component,
        data: {
            title: 'Error 401 - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: '404',
        canActivate: [],
        component: errorContainers.Error404Component,
        data: {
            title: 'Error 404 - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: '500',
        canActivate: [],
        component: errorContainers.Error500Component,
        data: {
            title: 'Error 500 - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: '**',
        pathMatch: 'full',
        component: errorContainers.Error404Component,
    },
];

@NgModule({
    imports: [ErrorModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ErrorRoutingModule {}
