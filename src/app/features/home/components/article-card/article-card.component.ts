import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../../shared/models/article.model";

@Component({
    selector: 'app-article-card',
    templateUrl: './article-card.component.html',
    styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
    @Input() article!: Article;
    @Input() searchQuery!: string;

    ngOnInit() {
    }

}
