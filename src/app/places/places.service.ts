import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Database, set, ref, update, onValue } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  constructor(private http: HttpClient, private database: Database) {}

  getPlaces() {
    return this.http.get(
      'https://vacation-nation-91ae6-default-rtdb.firebaseio.com/places.json'
    );
  }

  newPlace(
    name: string,
    imageUrl: string,
    description: string,
    vehicle: string,
    _id: string
  ) {
    set(ref(this.database, 'places/' + _id), {
      name: name,
      imageUrl: imageUrl,
      description: description,
      vehicle: vehicle,
      userId: _id,
    });
  }
}
