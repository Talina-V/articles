import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Article} from "../../../../shared/models/article.model";
import {ArticleService} from "../../../../core/services/article.service";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-articles-list',
    templateUrl: './articles-list.component.html',
    styleUrls: ['./articles-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesListComponent implements OnInit {
    term: string = '';
    title = 'Filter by keywords';
    // articles$!: Article[];
    articles: Article[] = []
    filter: FormControl = new FormControl<string>('');
    constructor(private articleService: ArticleService) {
    }

    ngOnInit() {
        // this.articles = this.articleService.getArticles();
        this.articleService.getArticles().subscribe((articles: Article[]) => {
            this.articles = articles;
        })

        // this.filter.valueChanges
        //     .pipe(
        //         distinctUntilChanged(),
        //         debounceTime(500),
        //         switchMap((value) => this.articleService.getArticleByName(value))
        //     )
        //     .subscribe((articles) => {
        //         this.articles = articles;
        //     })

    }

}
