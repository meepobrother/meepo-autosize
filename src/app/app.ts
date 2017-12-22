import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoSizeComponent } from './autosize/autosize';

@NgModule({
    declarations: [
        AutoSizeComponent
    ],
    imports: [ CommonModule ],
    exports: [
        AutoSizeComponent
    ],
    providers: [],
})
export class AutoSizeModule {}
