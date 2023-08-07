import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {LoaderService} from "./shared/services/loader.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'articles';

    loader = false;
    private loaderSubscription: Subscription | undefined;

    constructor(
        public loaderService: LoaderService,
        private cdr: ChangeDetectorRef
    ) {
    }

    ngOnInit() {
        this.loaderSubscription = this.loaderService.isActiveLoader$$.subscribe(loader => {
            this.loader = loader;
            this.cdr.detectChanges();
        });
    }

    ngOnDestroy() {
        if (this.loaderSubscription) {
            this.loaderSubscription.unsubscribe();
        }
    }
}
