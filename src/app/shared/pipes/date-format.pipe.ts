import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

    transform(value: string): string {
        const date = new Date(value);

        const monthNames = [
            "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ];
        const month = monthNames[date.getUTCMonth()];

        const day = date.getUTCDate();
        const daySuffix = this.getDaySuffix(day);

        const year = date.getUTCFullYear();

        return `${month} ${day}${daySuffix}, ${year}`;
    }

    private getDaySuffix(day: number): string {
        if (day >= 11 && day <= 13) {
            return 'th';
        }
        switch (day % 10) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        }
    }
}
