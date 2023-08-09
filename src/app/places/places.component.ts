import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
})
export class PlacesComponent implements OnInit {
  placesArr: any = [];

  constructor(private placesService: PlacesService) {}

  ngOnInit(): void {
     const places = this.placesService.getPlaces().subscribe((places) => {
      this.placesArr = places;
      if(this.placesArr){
        this.placesArr = Object.values(this.placesArr);
        // console.log(this.placesArr);
      }
      // console.log('places subs')
      // console.log(places)
      // console.log('places Arr')
      // console.log(this.placesArr)
    });
  }
}
