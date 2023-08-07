import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'highlightKeyword'
})
export class HighlightKeywordPipe implements PipeTransform {
    transform(value: string, searchTerm: string): string {
        if (!searchTerm) {
            return value;
        }

        const keywords = searchTerm.toLowerCase().split(' ');

        for (const keyword of keywords) {
            const regex = new RegExp(keyword, 'gi');
            value = value.replace(regex, match => `<span class="highlight">${match}</span>`);
        }

        return value;
    }
}
