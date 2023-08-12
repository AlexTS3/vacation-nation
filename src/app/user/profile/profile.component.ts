import { Component, OnInit } from '@angular/core';
import { Database, remove, ref } from '@angular/fire/database';
import { PlacesService } from 'src/app/places/places.service';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userPlaces: any = [];
  currentPlaces: any = [];
  user: any = '';
  isLoading: boolean = true;
  constructor(
    private database: Database,
    private placeService: PlacesService,
    private userInfo: UserServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.userInfo.getUserData();
    const currentUser = this.userInfo.getUserData();
    this.placeService.getPlaces().subscribe((places) => {
      this.currentPlaces = places;
      if(places){
        this.currentPlaces = Object.values(this.currentPlaces);
        this.currentPlaces.forEach((place: any) => {
          if (currentUser['uid'] === place['ownerId']) {
            this.userPlaces.push(place);
          }
        });
      }
      this.isLoading= false
    });
    // console.log(user['uid']);
    // console.log(user);
  }

  deletePlace(placeId: string) {
    const confirmation = confirm('Are you sure you want to delete this place?')

    if(confirmation){
      remove(ref(this.database, 'places/' + placeId));
      this.router.navigate['places']
    }
  }
}
