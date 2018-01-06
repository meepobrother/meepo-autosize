import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoSizeDirective } from './autosize/autosize.directive';

@NgModule({
    declarations: [
        AutoSizeDirective
    ],
    imports: [ CommonModule ],
    exports: [
        AutoSizeDirective
    ],
    providers: [],
})
export class AutoSizeModule {}
