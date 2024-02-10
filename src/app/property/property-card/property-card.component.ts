import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-property-card',
    standalone: true,
    templateUrl: 'property-card.component.html',
    styleUrl: 'property-card.component.scss'
})

export class PropertyCardComponent {
    @Input() property: any;
}