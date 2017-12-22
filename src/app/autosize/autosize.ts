import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
    @ViewChild('textarea') textarea: ElementRef;
    constructor() { }

    ngOnInit() { 
        autosize(this.textarea.nativeElement)
    }
}