import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PlacesRoutingModule } from './places-routing.module';
import { MyPlacesComponent } from './my-places/my-places.component';
import { PlannedComponent } from './planned/planned.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MyPlacesComponent, PlannedComponent, ProfileComponent],
  imports: [CommonModule, PlacesRoutingModule, FormsModule],
  providers: [],
})
export class PlacesModule {}
