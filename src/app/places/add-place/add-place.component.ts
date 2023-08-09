import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user/user-service.service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css'],
})
export class AddPlaceComponent {
  constructor(private placesService: PlacesService, private router: Router, private userService: UserServiceService) {}

  addPlace(form: NgForm): void {
    const userData = this.userService.getUserData()
    console.log(userData['uid']);
    if(userData['uid']) {
      const { name, imageUrl, description, vehicle } = form.value;
      console.log(userData['uid']);
      this.placesService.newPlace(name, imageUrl, description, vehicle, userData['uid']);
      this.router.navigate(['/places']);
    }
  }
}
