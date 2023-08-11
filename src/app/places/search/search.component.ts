import { Component, OnInit } from '@angular/core';
import {PlaceInterface} from '../../intefaces';
import { NgForm, FormBuilder } from '@angular/forms';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchValue = '';
  places: PlaceInterface[] = [];
  searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });

  constructor(private placesService: PlacesService, private fb: FormBuilder){}

  ngOnInit(): void {
    
  }

  getPlaceData(): void {
    this.placesService.searchPlaces(this.searchValue).subscribe((places) => {
      this.places = places
    })
  }

  searchPlaces(form: NgForm): void {
    this.searchValue = form.value ?? '';
    this.getPlaceData();
  }
}
