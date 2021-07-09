import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from './design/layout/layout.component';
import {HeaderComponent} from './design/header/header.component';
import {HomePage} from './pages/home/home.page';
import {FooterComponent} from './design/footer/footer.component';
import {LogoComponent} from './design/header/logo/logo.component';
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import { ButtonComponent } from './button/button.component';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        LogoComponent,
        HomePage,
        ButtonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlexModule,
        FlexLayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
