import {Component, OnInit} from '@angular/core';
import {Article} from "../../shared/models/article.model";
import {ArticleService} from "../../core/services/article.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
    article!: Article;

    constructor(
        private route: ActivatedRoute,
        private articleService: ArticleService
    ) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const articleId = params.get('id');
            if (articleId) {
                this.getArticle(articleId);
            }
        });
    }

    getArticle(articleId: string) {
        this.articleService.getArticleById(articleId).subscribe(
            (article: Article) => {
                this.article = article;
            }
        );
    }
}
