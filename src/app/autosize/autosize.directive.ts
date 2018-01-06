import { Directive, ElementRef, Renderer2, OnInit, Input, HostListener, HostBinding } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import "rxjs/add/operator/debounceTime";
@Directive({ selector: '[autoSize]' })
export class AutoSizeDirective implements OnInit {
    // 初始高度
    @Input()
    set autoSize(val: number) {
        this._height = val;
    }
    get autoSize() {
        return this._height;
    }
    @HostBinding('style.height.px') _height: number = 30;
    change$: Subject<any> = new Subject();
    @HostListener('keyup', ['$event'])
    onKeyUp() {
        this.change$.next();
    }
    offset: number = this._height;
    constructor(
        public ele: ElementRef,
        public render: Renderer2
    ) {
        this.change$.asObservable().subscribe(() => {
            this.resize();
        });
    }

    resize() {
        this._height =
            Math.floor(this.ele.nativeElement.scrollTop)
            + this.ele.nativeElement.offsetHeight;
    }

    ngOnInit() { }
}