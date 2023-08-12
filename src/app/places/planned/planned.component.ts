import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/user/user-service.service';
import { PlacesService } from '../places.service';
import { PlaceInterface } from 'src/app/intefaces';

@Component({
  selector: 'app-planned',
  templateUrl: './planned.component.html',
  styleUrls: ['./planned.component.css'],
})
export class PlannedComponent implements OnInit {
  place: PlaceInterface;
  plannedPlaces: PlaceInterface[] = [];
  isAdding: boolean = false;
  constructor(
    private userService: UserServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private placesService: PlacesService
  ) {}

  ngOnInit(): void {
    const userId = this.userService.getUserData()['uid'];
    const placeId = this.route.snapshot.paramMap.get('placeId');
    if (placeId) {
      this.addToPlans(userId, placeId);
    } else {
      this.renderPlanned(userId);
    }
  }

  addToPlans(userId: string, placeId: string) {
    this.isAdding = true;
    const place = this.placesService
      .getPlaceById(placeId)
      .subscribe((placeData: any) => {
        this.place = placeData;
        this.isAdding = true;
        console.log(this.place);
        console.log(this.isAdding)
        this.placesService.addToPlans(userId, this.place);
      });
    if (!userId) {
      this.router.navigate(['login']);
    }
  }

  renderPlanned(userId: string) {
    this.isAdding = false;
    this.placesService.getPlanned().subscribe((planned: any) => {
      const plannedPlaces: any = Object.values(planned);
      this.plannedPlaces = plannedPlaces;
        console.log(this.isAdding)

    });
  }
}
