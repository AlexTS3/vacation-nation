import { Component, OnInit } from '@angular/core';
import { PlaceInterface } from '../../intefaces/Place';
import { NgForm, FormBuilder } from '@angular/forms';
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

  constructor(
    private placesService: PlacesService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const query = this.route.snapshot.paramMap.get('query');

    if(query) {
      this.searchPlace(query)
    }
    // this.searchResult = place
  }

  searchPlace(query: string) {
    this.places = [];
    // const query = this.route.snapshot.paramMap.get('query');
     this.placesService.searchPlaces().subscribe((placeData)=>{
       const searchPlaces = placeData
       console.log(searchPlaces)
       if(searchPlaces) {
         searchPlaces.forEach((places) => {
          if(query) {
            Object.values(places).forEach((check: any) => {
              const checkName = check['name'].toLowerCase().split(' ')
              const includes = checkName.includes(query.toLowerCase())
              if(includes){
                this.places.push(check)
              }
            })
          }
        });
       }
    })
    this.router.navigate([`search/${query}`]);
  }
}
