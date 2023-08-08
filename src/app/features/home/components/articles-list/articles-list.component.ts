import {Component, OnInit} from '@angular/core';
import {Article} from "../../../../shared/models/article.model";
import {ArticleService} from "../../../../core/services/article.service";
import {FormControl} from "@angular/forms";
import {BehaviorSubject, debounceTime, distinctUntilChanged, Observable, of, switchMap} from "rxjs";

@Component({
    selector: 'app-articles-list',
    templateUrl: './articles-list.component.html',
    styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
    title = 'Filter by keywords';
    articles: Article[] = [];
    articles$: Observable<Article[]> = of([]);
    filter: FormControl = new FormControl<string>('');
    foundArticlesCount = 0;
    searchQuery: string = '';
    searchQuery$ = new BehaviorSubject<string>('');

    constructor(private articleService: ArticleService) {
    }

    ngOnInit() {
        this.articles$ = this.articleService.getArticles();
        this.articles$.subscribe((articles: Article[]) => {
            this.foundArticlesCount = articles.length;
        });

        this.filter.valueChanges
            .pipe(
                distinctUntilChanged(),
                debounceTime(500),
                switchMap((value) => this.articleService.getArticleByName(value))
            )
            .subscribe((articles) => {
                this.articles$ = of(articles);
                this.foundArticlesCount = articles.length;
            })
    }

    search() {
        this.searchQuery$.next(this.searchQuery);
    }

}
