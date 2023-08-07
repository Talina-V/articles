import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterArticlesPipe } from './pipes/filter-articles.pipe';
import {HighlightKeywordPipe} from "./pipes/highlight-keyword.pipe";



@NgModule({
    declarations: [
        FilterArticlesPipe,
        HighlightKeywordPipe
    ],
    exports: [
        FilterArticlesPipe
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
