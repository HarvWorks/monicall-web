import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styles: [`
        .col-md-3 {
            padding-left: 15px;
            padding-right: 15px;
        }
        .fa {
            font-family: 'Raleway', sans-serif;
            font-size: 14px;
            line-height: 30px;
        }
    `]
})
export class FooterComponent {
}
