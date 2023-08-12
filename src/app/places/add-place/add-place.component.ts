import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user/user-service.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css'],
})
export class AddPlaceComponent {
  constructor(
    private placesService: PlacesService,
    private router: Router,
    private userService: UserServiceService,
    private formBuilder: FormBuilder
  ) {}

    

  addPlace(form: NgForm): void {
    const userData = this.userService.getUserData();
    const ownerId = userData['uid'];
    const id = uuidv4();
    if (ownerId) {
      const { name, imageUrl, description } = form.value;
      this.placesService.newPlace(name, imageUrl, description, ownerId, id);
      this.router.navigate(['/places']);
    }
  }
}
