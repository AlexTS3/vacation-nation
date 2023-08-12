import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PlacesRoutingModule } from './places-routing.module';
import { PlannedComponent } from './planned/planned.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PlannedComponent, ProfileComponent, EditComponent],
  imports: [CommonModule, PlacesRoutingModule, FormsModule, ReactiveFormsModule, SharedModule],
  providers: [],
})
export class PlacesModule {}
