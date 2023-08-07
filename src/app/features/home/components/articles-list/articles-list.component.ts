import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Article} from "../../../../shared/models/article.model";
import {ArticleService} from "../../../../core/services/article.service";
import {FormControl} from "@angular/forms";
import {BehaviorSubject, debounceTime, distinctUntilChanged, fromEvent, map, startWith, switchMap} from "rxjs";

@Component({
    selector: 'app-articles-list',
    templateUrl: './articles-list.component.html',
    styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
    title = 'Filter by keywords';
    articles: Article[] = [];
    filter: FormControl = new FormControl<string>('');
    foundArticlesCount = 0;
    searchQuery: string = '';
    searchQuery$$ = new BehaviorSubject<string>('');
    search() {
        this.searchQuery$$.next(this.searchQuery);
    }

    constructor(private articleService: ArticleService) {
    }

    ngOnInit() {
        this.articleService.getArticles().subscribe((articles: Article[]) => {
            this.articles = articles;
            this.foundArticlesCount = articles.length;
        })

        this.filter.valueChanges
            .pipe(
                distinctUntilChanged(),
                debounceTime(500),
                switchMap((value) => this.articleService.getArticleByName(value))
            )
            .subscribe((articles) => {
                this.articles = articles;
                this.foundArticlesCount = articles.length;
            })
    }
}
