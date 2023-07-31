import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
})
export class PlacesComponent implements OnInit {
  placesArr: Array<object> = [];

  constructor(private placesService: PlacesService) {}

  ngOnInit(): void {
    
  }
  
}
