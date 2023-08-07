import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeaturesRoutingModule} from './features-routing.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FeaturesRoutingModule,
        HttpClientModule,
    ],
    exports: []

})
export class FeaturesModule {
}
