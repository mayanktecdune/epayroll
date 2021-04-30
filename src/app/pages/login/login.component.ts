import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

    bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];
    htmlTag: HTMLElement = document.getElementsByTagName('html')[0];

    constructor() { }

    ngOnInit() {
        this.bodyTag.classList.add('login');
        this.htmlTag.classList.add('login');
      }

    ngOnDestroy() {
        this.bodyTag.classList.remove('login');
        this.htmlTag.classList.remove('login');
      }

}
