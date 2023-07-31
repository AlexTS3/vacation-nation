import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  constructor(private http: HttpClient) {}

  getPlaces() {
    return this.http.get(
      'https://vacation-nation-91ae6-default-rtdb.firebaseio.com/.json'
    );
  }

  newPlace(
    name: string,
    imageUrl: string,
    description: string,
    vehicle: string,
    _id: string
  ) {
    return this.http.post(
      'https://vacation-nation-91ae6-default-rtdb.firebaseio.com/.json',
      { name, imageUrl, description, vehicle, _id }
    );
  }
}
2;
