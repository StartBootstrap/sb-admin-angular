/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { UtilityModule } from './utility.module';

/* Containers */
import * as utilityContainers from './containers';

/* Guards */
import * as utilityGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: utilityContainers.VersionComponent,
    },
];

@NgModule({
    imports: [UtilityModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class UtilityRoutingModule {}
