import {Injectable} from '@angular/core';
import {ArticlesApiService} from "./articles-api.service";
import {Observable, tap} from "rxjs";
import {Article} from "../../shared/models/article.model";
import {LoaderService} from "../../shared/services/loader.service";

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    constructor(
        private articleApiService: ArticlesApiService,
        private loaderService: LoaderService,
    ) {
    }

    getArticles(): Observable<Article[]> {
        this.loaderService.show();
        return this.articleApiService.getArticles().pipe(
            tap(() => {
                this.loaderService.hide();
            }),
        )
    }

    getArticleById(id: string | number): Observable<Article> {
        this.loaderService.show();
        return this.articleApiService.getArticleById(id).pipe(
            tap(() => {
                this.loaderService.hide();
            }),
        )
    }

    getArticleByName(title: string): Observable<Article[]> {
        this.loaderService.show();
        return this.articleApiService.getArticleByName(title).pipe(
            tap(() => {
                this.loaderService.hide();
            }),
        )
    }
}
