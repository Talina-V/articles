import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../../shared/models/article.model";

@Injectable({
    providedIn: 'root'
})
export class ArticlesApiService {

    constructor(private httpClient: HttpClient) {
    }

    private BASE_API = "https://api.spaceflightnewsapi.net"

    getArticles(): Observable<Article[]> {
        return this.httpClient.get<Article[]>(`${this.BASE_API}/v3/articles/`);
    }

    getArticleById(id: string | number): Observable<Article> {
        return this.httpClient.get<Article>(`${this.BASE_API}/v3/articles/${id}`);
    }
}
