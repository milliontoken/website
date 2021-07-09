import { NgModule } from '@angular/core';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './design/footer/footer.component';
import { HeaderComponent } from './design/header/header.component';
import { LogoComponent } from './design/header/logo/logo.component';
import { LayoutComponent } from './design/layout/layout.component';
import { TokenPropertiesComponent } from './design/token-properties/token-properties.component';
import { HomePage } from './pages/home/home.page';
import { ButtonComponent } from './shared/button/button.component';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        LogoComponent,
        HomePage,
        ButtonComponent,
        TokenPropertiesComponent,
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
