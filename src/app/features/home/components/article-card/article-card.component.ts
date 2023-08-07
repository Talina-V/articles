import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "../../../../core/services/article.service";
import {Article} from "../../../../shared/models/article.model";

@Component({
    selector: 'app-article-card',
    templateUrl: './article-card.component.html',
    styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
    @Input()
    article!: Article;

    ngOnInit() {

    }

}
