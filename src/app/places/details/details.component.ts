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
    this.placesService.getPlaces().subscribe((places) => {
      // this.detailsPlace = places;

      const id = this.fetchData();
      this.currentPlace = Object.values(places).forEach((place: any) => {
        this.detailsPlace = place;
        const currentUserId = this.userService.getUserData()['uid'];
        const id = place.userId;
        this.isOwner = id === currentUserId;
      });

    });
  }

  delete() {}
  fetchData() {
    const id = this.route.snapshot.params['placeId'];
    return id;
  }
}
