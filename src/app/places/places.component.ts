import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
})
export class PlacesComponent implements OnInit {
  placesArr: any = [];
  isLoading: boolean = true;

  constructor(private placesService: PlacesService) {}

  ngOnInit(): void {
     this.placesService.getPlaces().subscribe((places) => {
      this.placesArr = places;
      if(this.placesArr){
        this.placesArr = Object.values(this.placesArr);
      }
      this.isLoading = false;
    });
  }
}
