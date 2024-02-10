import { Component, NgModule, OnInit } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [
    PropertyCardComponent,
    NgFor,
    HttpClientModule
  ],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.scss'
})
export class PropertyListComponent implements OnInit {
  properties: any;

  constructor(private http: HttpClient) { };

  ngOnInit(): void {
    this.http.get('data/properties.json').subscribe(
      data => {
        this.properties = data;
        console.log(data)
      });
  }

}