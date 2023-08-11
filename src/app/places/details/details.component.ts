import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/user/user-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  detailsPlace: any;
  isOwner: boolean = false;
  currentPlace: any;
  constructor(
    private placesService: PlacesService,
    private route: ActivatedRoute,
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {
    const currentUserId = this.userService.getUserData()['uid'];
    const paramsId = this.fetchData();

    this.placesService.getPlaceById(paramsId).subscribe((place) => {
      this.currentPlace = place;
      const owner = place['userId'];
      this.isOwner = owner === currentUserId;
    });
  }

  delete(placeId: string) {
    const confirmation = confirm('Are you sure you want to delete this place?');

    if(confirmation) {
      this.placesService.delete(placeId)
    }
  }

  fetchData() {
    const id = this.route.snapshot.params['placeId'];
    return id;
  }
}
