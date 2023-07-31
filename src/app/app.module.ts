import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlacesComponent } from './places/places.component';
import { AddPlaceComponent } from './places/add-place/add-place.component';
import { DetailsComponent } from './places/details/details.component';
import { SearchComponent } from './search/search.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { PlacesModule } from './places/places.module';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlacesComponent,
    AddPlaceComponent,
    DetailsComponent,
    SearchComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    PlacesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
