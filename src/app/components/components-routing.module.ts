import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [{
    // path: '',
    // component: PagesComponent,
    // children: [{
    //     path: 'dashboard',
    //     component: DashboardComponent,
    // },
    // {
    //     path: '',
    //     redirectTo: 'dashboard',
    //     pathMatch: 'full',
    // },
    // {
    //     path: '**',
    //     component: NotFoundComponent,
    // }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}
