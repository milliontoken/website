import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from "./pages/home/home.page";
import {ContactPage} from "./pages/contact/contact.page";
import {AboutPage} from "./pages/about/about.page";
import {BlogPage} from "./pages/blog/blog.page";
import {LayoutComponent} from "./design/layout/layout.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: HomePage
            },
            {
                path: 'contact',
                component: ContactPage
            },
            {
                path: 'about',
                component: AboutPage
            },
            {
                path: 'blog',
                component: BlogPage
            },
            {
                path: '**',
                redirectTo: 'home'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
