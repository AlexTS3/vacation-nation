import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesComponent } from './places.component';
import { AddPlaceComponent } from './add-place/add-place.component';
import { PlannedComponent } from './planned/planned.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'places',
    component: PlacesComponent,
  },
  {
    path: 'add-place',
    component: AddPlaceComponent,
  },
  {
    path: 'planned',
    component: PlannedComponent,
  },
  {
    path: 'places/:placeId/details',
    component: DetailsComponent,
  },
  {
    path: 'profile/:placeId/edit',
    component: EditComponent,
  },
  {
    path: 'places/:placeId/edit',
    component: EditComponent,
  },
  {
    path: 'search/:query',
    component: SearchComponent,
  },
  {
    path: 'search/:query/places/:placeId/details',
    component: DetailsComponent,
  },
  {
    path: 'planned/:placeId',
    component: PlannedComponent,
  },
  {
    path: 'profile/planned',
    component: PlannedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesRoutingModule {}
