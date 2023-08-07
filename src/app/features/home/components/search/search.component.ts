import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    title = 'Filter by keywords';
    // term = '';
     // Добавим событие termChange для передачи значения term

    // onTermChange() {
    //     this.termChange.emit(this.term);
    // }

}
