import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { appRouting } from './app.routing'
import { HttpModule } from "@angular/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header.component"
import { IndexComponent } from "./index/index.component"
import { ServicesComponent } from "./services/services.component"
import { ContactComponent } from "./contact/contact.component"
import { BlogComponent } from "./blog/blog.component"
import { SummaryComponent } from "./blog/summary.component"
import { PostComponent } from "./blog/post.component"
import { LeftBlogLinkComponent } from "./blog/left.blog.link.component"
import { RightBlogLinkComponent } from "./blog/right.blog.link.component"
import { AboutComponent } from "./about/about.component"
import { CompaniesServedComponent } from "./shared/companies.served.component"
import { CompanyModalComponent } from "./shared/company.modal.component"
import { ModalComponent } from "./shared/modal.directive.component"
import { CompanyModalService } from './shared/company.modal.service'
import { ModalService } from './shared/modal.service'
import { TeamComponent } from "./shared/team.component"
import { SocialComponent } from "./shared/social.component"
import { FooterComponent } from "./shared/footer.component"
declare var $:any

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        IndexComponent,
        ServicesComponent,
        ContactComponent,
        BlogComponent,
        SummaryComponent,
        PostComponent,
        LeftBlogLinkComponent,
        RightBlogLinkComponent,
        AboutComponent,
        CompaniesServedComponent,
        CompanyModalComponent,
        ModalComponent,
        TeamComponent,
        SocialComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        appRouting,
        HttpModule
    ],
    providers: [
        ModalService,
        CompanyModalService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
