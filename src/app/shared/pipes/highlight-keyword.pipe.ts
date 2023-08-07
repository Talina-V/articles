import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'highlightKeyword'
})
export class HighlightKeywordPipe implements PipeTransform {
    transform(wholeText: string, searchQuery: string): string {
        if (!searchQuery) {
            return wholeText;
        }
        const re = new RegExp(searchQuery, 'gi');
        return wholeText.replace(re, '<mark>$&</mark>');
    }
}
