import { Component, Input } from "@angular/core";
import { IProperty } from "../IProperty.interface";
import { RouterLink } from "@angular/router";
import { NgIf } from "@angular/common";

@Component({
    selector: 'app-property-card',
    standalone: true,
    templateUrl: 'property-card.component.html',
    styleUrl: 'property-card.component.scss',
    imports: [
        RouterLink,
        NgIf
    ]
})

export class PropertyCardComponent {
    @Input() property!: IProperty;
}