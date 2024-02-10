import { Component } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [
    PropertyCardComponent,
    NgFor
  ],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.scss'
})
export class PropertyListComponent {
  properties: Array<any> = [
    {
      Id: 1,
      Name: 'Red House',
      Type: 'House',
      Price: 100000
    },
    {
      Id: 2,
      Name: 'Blue House',
      Type: 'House',
      Price: 120500
    },
    {
      Id: 3,
      Name: 'Violet Villa',
      Type: 'Villa',
      Price: 190405
    },
    {
      Id: 4,
      Name: 'Pearl White House',
      Type: 'House',
      Price: 150700
    },
    {
      Id: 5,
      Name: 'Micro House',
      Type: 'House',
      Price: 60800
    },
    {
      Id: 6,
      Name: 'Azur Villa',
      Type: 'Villa',
      Price: 180980
    }
  ]
}
