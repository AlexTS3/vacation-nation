import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Database,
  set,
  ref,
  update,
  onValue,
  remove,
} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { PlaceInterface } from '../intefaces/Place';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  place: PlaceInterface | undefined;
  places: any = [];
  returnPlaces: any = [];
  currentPlace: any = [];
  constructor(private http: HttpClient, private database: Database) {}

  getPlaces() {
    return this.http.get(
      'https://vacation-nation-91ae6-default-rtdb.firebaseio.com/places.json'
    );
  }

  searchPlaces() {
    return this.http.get<PlaceInterface[]>(
      `https://vacation-nation-91ae6-default-rtdb.firebaseio.com/places.json`
    );
  }

  newPlace(
    name: string,
    imageUrl: string,
    description: string,
    userId: string,
    placeId: string
  ) {
    set(ref(this.database, 'places/' + placeId), {
      name: name,
      imageUrl: imageUrl,
      description: description,
      ownerId: userId,
      placeId: placeId,
    });
  }

  addToPlans(userId: string, data: object) {
    set(ref(this.database, `planned/${userId + ' '}` + data['placeId']), {
      name: data['name'],
      imageUrl: data['imageUrl'],
      description: data['description'],
      ownerId: data['ownerId'],
      placeId: data['placeId'],
    });
  };

  getPlanned(){
    return this.http.get(
      `https://vacation-nation-91ae6-default-rtdb.firebaseio.com/planned.json`
    );
  }

  getPlaceById(placeId: string) {
    return this.http.get(
      `https://vacation-nation-91ae6-default-rtdb.firebaseio.com/places/${placeId}.json`
    );
  }

  updatePlace(placeId: string, data: object) {
    console.log(placeId);
    console.log(data);
    update(ref(this.database, 'places/' + placeId), data);
  }

  delete(placeId: string) {
    remove(ref(this.database, 'places/' + placeId));
  }

  deletePlanned(placeId: string) {
    remove(ref(this.database, 'planned/' + placeId));
  }
}
