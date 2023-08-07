import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

    private isActiveLoader$: Subject<boolean> = new Subject<boolean>();
    isActiveLoader$$ = this.isActiveLoader$.asObservable();

    show(): void {
        this.isActiveLoader$.next(true);
    }

    hide(): void {
        this.isActiveLoader$.next(false);
    }
}
