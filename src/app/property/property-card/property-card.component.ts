import { Component } from "@angular/core";

@Component({
    selector: 'app-property-card',
    standalone: true,
    templateUrl: 'property-card.component.html',
    styleUrl: 'property-card.component.scss'
})

export class PropertyCardComponent {
    Property: any = {
        Id: 1,
        Name: 'Red House',
        Type: 'House',
        Price: 100000
    }
}