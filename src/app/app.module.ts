import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PathNotFoundComponent} from './core/components/path-not-found/path-not-found.component';
import {LoaderComponent} from './shared/components/loader/loader.component';
import {
    ArticleCardComponent,
    ArticlesListComponent,
} from "./features/home/components";
import {ArticleComponent} from './features/article/article.component';
import {FeaturesModule} from "./features/features.module";
import {RouterModule} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {DateFormatPipe} from './shared/pipes/date-format.pipe';
import {TruncateTextPipe} from './shared/pipes/truncate-text.pipe';
import {SharedModule} from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
        ArticleCardComponent,
        ArticlesListComponent,
        PathNotFoundComponent,
        LoaderComponent,
        ArticleComponent,
        DateFormatPipe,
        TruncateTextPipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FeaturesModule,
        RouterModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        HttpClientModule,
        CoreModule,
        FormsModule,
        CommonModule,
        SharedModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
