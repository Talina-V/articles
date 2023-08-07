import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Article} from "../../../../shared/models/article.model";
import {ArticleService} from "../../../../core/services/article.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-articles-list',
    templateUrl: './articles-list.component.html',
    styleUrls: ['./articles-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesListComponent implements OnInit {

    articles$!: Observable<Article[]>;

    constructor(private articleService: ArticleService) {
    }

    ngOnInit() {
        this.articles$ = this.articleService.getArticles();

        this.articles$.subscribe((data: Article[]) => {
            console.log('API Response:', data);
        });
    }
}
