import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { appRouting } from './app.routing'
import { HttpModule } from "@angular/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from "./app.component";
import { IndexComponent } from "./index/index.component"
declare var $:any

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        appRouting,
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
