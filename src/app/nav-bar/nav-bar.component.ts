import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ]
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
