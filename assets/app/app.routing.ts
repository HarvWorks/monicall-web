import { Routes, RouterModule } from "@angular/router"

import { IndexComponent } from "./index/index.component"


const APP_ROUTES:Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: IndexComponent },
    { path: '**', redirectTo: '/index' }
]

export const appRouting = RouterModule.forRoot(APP_ROUTES);
