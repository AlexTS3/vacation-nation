import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css'],
})
export class AddPlaceComponent {
  constructor(private placesService: PlacesService, private router: Router) {}

  addPlace(form: NgForm): void {
  const id = JSON.parse(localStorage.getItem('Current-User')!);
    console.log(id)
    if(id) {
      const { name, imageUrl, description, vehicle } = form.value;
      console.log(id);
      this.placesService.newPlace(name, imageUrl, description, vehicle, id);
      this.router.navigate(['/places']);
    }
  }
}
