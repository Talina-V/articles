import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HighlightKeywordPipe} from "./pipes/highlight-keyword.pipe";



@NgModule({
    declarations: [
        HighlightKeywordPipe
    ],
    exports: [
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
