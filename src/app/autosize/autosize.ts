import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
declare const require: any;
let autosize = require('autosize');
@Component({
    selector: 'autosize',
    templateUrl: './autosize.html',
    styleUrls: [
        './autosize.scss'
    ]
})

export class AutoSizeComponent implements OnInit {
    @Input()
    set model(val: string) {
        if(val){
            this.textarea.nativeElement.value = val;
        }
    }
    get model() {
        let value = this.textarea.nativeElement.value;
        value = value || '';
        return value;
    }
    @Output() modelChange: EventEmitter<any> = new EventEmitter();
    @ViewChild('textarea') textarea: ElementRef;
    constructor() { }

    ngOnInit() {
        autosize(this.textarea.nativeElement);
    }

    _onChange(e: any) {
        this.modelChange.emit(this.textarea.nativeElement.value);
    }
}