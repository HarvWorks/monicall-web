import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
    selector: 'summary-component',
    templateUrl: './summary.component.html'
})

export class SummaryComponent {
    @Input() post
    @Input() index
}
