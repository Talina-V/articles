import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PathNotFoundComponent} from "./core/components/path-not-found/path-not-found.component";
import {ArticleComponent} from "./features/article/article.component";
import {ArticlesListComponent} from "./features/home/components";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: ArticlesListComponent},
    {
        path: 'article',
        loadChildren: () => import('./features/features.module')
            .then(m => m.FeaturesModule)
    },
    {path: '**', component: PathNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
