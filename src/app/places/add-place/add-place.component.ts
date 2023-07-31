import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css'],
})
export class AddPlaceComponent {
  constructor(private placesService: PlacesService, private router: Router) {}

  addPlace(form: NgForm): void {
    const { name, imageUrl, description, vehicle } = form.value;
    const id = uuidv4();
    console.log(id)
    this.placesService
      .newPlace(name, imageUrl, description, vehicle, id)
      .subscribe(() => {
        this.router.navigate(['/places']);
      });
  }
}
