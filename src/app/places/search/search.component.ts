import { Component, OnInit } from '@angular/core';
import { PlaceInterface } from '../../intefaces/Place';
import { PlacesService } from '../places.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchResult: PlaceInterface | undefined;
  places: PlaceInterface[] = [];
  isLoading: boolean = false;

  constructor(
    private placesService: PlacesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const query = this.route.snapshot.paramMap.get('query');

    if (query) {
      this.searchPlace(query);
      this.isLoading = false;

    }
    // this.searchResult = place
  }

  searchPlace(query: string) {
    this.isLoading = true
    this.places = [];
    // const query = this.route.snapshot.paramMap.get('query');
    this.placesService.searchPlaces().subscribe((placeData) => {
      const searchPlaces = placeData;
      if (searchPlaces) {
        Object.values(searchPlaces).forEach((place) => {
          if (query) {
              const checkName = place['name'].toLowerCase().split(' ');
              const includes = checkName.includes(query.toLowerCase());
              if (includes) {
                this.places.push(place);
              }
            
          }
        });
      }
    });
    this.router.navigate([`search/${query}`]);
  }
}
