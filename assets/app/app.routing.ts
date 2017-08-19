import { Routes, RouterModule } from "@angular/router"

import { IndexComponent } from "./index/index.component"
import { ServicesComponent } from "./services/services.component"
import { ContactComponent } from "./contact/contact.component"
import { BlogComponent } from "./blog/blog.component"
import { PostComponent } from "./blog/post.component"
import { AboutComponent } from "./about/about.component"

const APP_ROUTES:Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: IndexComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/:id', component: PostComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '/index' }
]

export const appRouting = RouterModule.forRoot(APP_ROUTES);
