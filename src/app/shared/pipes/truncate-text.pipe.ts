import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

    transform(value: string, maxLength: number = 100){
        if (value.length > maxLength) {
            return value.slice(0, maxLength) + '...';
        }
        return value;
    }

}
