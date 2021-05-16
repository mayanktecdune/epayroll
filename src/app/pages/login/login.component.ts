import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EpServicesService } from '../../ep-services.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

    bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];
    htmlTag: HTMLElement = document.getElementsByTagName('html')[0];
    hide = true;

    constructor(
        private service: EpServicesService,
        private http: HttpClient
    ) { }

    ngOnInit() {

        this.service.getApi().then(data => {
            if (data.status == 200) {
                console.log(data)
            }
        })

        this.bodyTag.classList.add('login');
        this.htmlTag.classList.add('login');
    }

    ngOnDestroy() {
        this.bodyTag.classList.remove('login');
        this.htmlTag.classList.remove('login');
    }

    loginFormData(formData: NgForm) {

        console.log(formData.value);

    }

}
