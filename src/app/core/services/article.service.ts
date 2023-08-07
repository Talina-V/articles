import {Injectable} from '@angular/core';
import {ArticlesApiService} from "./articles-api.service";
import {Observable} from "rxjs";
import {Article} from "../../shared/models/article.model";

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    constructor(private articleApiService: ArticlesApiService) {
    }

    getArticles(): Observable<Article[]> {
        return this.articleApiService.getArticles()
    }

    getArticleById(id: string | number): Observable<Article> {
        return this.articleApiService.getArticleById(id);
    }

}
