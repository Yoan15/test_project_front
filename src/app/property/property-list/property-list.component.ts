import { Component, NgModule, OnInit } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { NgFor } from '@angular/common';
import { HousingService } from '../../services/housing.service';
import { HttpClientModule } from '@angular/common/http';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [
    PropertyCardComponent,
    NgFor,
    HttpClientModule
  ],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.scss',
  providers: [HousingService]
})
export class PropertyListComponent implements OnInit {
  // SellRent = 1;
  properties: Array<IProperty> = [];

  constructor(private route: ActivatedRoute, private housingService: HousingService) { };

  ngOnInit(): void {

    this.housingService.getAllProperties().subscribe(
      data => {
        this.properties = data;
        console.log(data);
        // console.log(this.route.snapshot.url.toString());
      }, error => {
        console.log(error);
      }
    );
  }

}