import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  placesArr: any = [];
  currentPlace: any;
  constructor(private placesService: PlacesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.placesService.getPlaces().subscribe((places) => {
      this.placesArr = places;
      const id = this.fetchData();
      
      this.placesArr = Object.values(this.placesArr).forEach((place) => {
      
      });
      
    });
  }


  fetchData() {
    const id = this.route.snapshot.params['placeId'];
    console.log(id)
  }
}
