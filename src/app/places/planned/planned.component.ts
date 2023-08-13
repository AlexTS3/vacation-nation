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
  isLoading: boolean = true;
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
    this.isLoading = false
  }

  addToPlans(userId: string, placeId: string) {
    if (!userId) {
      this.router.navigate(['login']);
    }
    this.isAdding = true;
    this.placesService.getPlaceById(placeId).subscribe((placeData: any) => {
      this.place = placeData;
      this.placesService.addToPlans(userId, this.place);
    });
  }

  renderPlanned(userId: string) {
    this.isAdding = false;
    this.plannedPlaces = [];
    let plannedPlaceId = '';
    this.placesService.getPlanned().subscribe((planned: any) => {

      const plannedPlaces: any = Object.values(planned);
      plannedPlaces.forEach((plannedPlace: any) => {
        plannedPlaceId = `${userId + ' ' + plannedPlace['placeId']}`;
        if (planned[plannedPlaceId]) {
          this.plannedPlaces.push(planned[plannedPlaceId]);
        }
      });

      console.log(this.plannedPlaces);
    });
  }

  deletePlan(placeId: string){
    const userId = this.userService.getUserData()['uid'];
    const removeId = `${userId + ' ' + placeId}`
    this.placesService.deletePlanned(removeId);
    this.router.navigate['places']
  }
}
