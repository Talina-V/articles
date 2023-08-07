import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'highlightKeyword'
})
export class HighlightKeywordPipe implements PipeTransform {
    transform(value: string, keyword: string): string {
        if (!keyword) {
            return value;
        }

        const keywordRegex = new RegExp(keyword, 'gi');
        return value.replace(keywordRegex, (match) => `<span class="highlight">${match}</span>`);
    }
}
