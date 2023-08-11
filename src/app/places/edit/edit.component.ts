import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlacesService } from '../places.service';
import { UserServiceService } from 'src/app/user/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  place: any = [];
  placeId: string = ''
  userId: string = ''
  constructor(private placesService: PlacesService, private userService: UserServiceService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.placeId = this.route.snapshot.paramMap.get('placeId');
    this.placesService.getPlaceById(this.placeId).subscribe((place) => {
      this.place = place
    });
  }

  editPlace(form: NgForm) {
    this.placeId = this.route.snapshot.paramMap.get('placeId');
    const userId = this.userService.getUserData()['uid'];
    this.placesService.getPlaceById(this.placeId).subscribe((place) => {
      this.place = place
      if(userId === place['userId']){
        this.placesService.updatePlace(this.placeId, form.value)
      }
      this.router.navigate([`/places`])
    })
  }
}
