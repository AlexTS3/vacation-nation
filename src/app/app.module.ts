import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlacesComponent } from './places/places.component';
import { AddPlaceComponent } from './places/add-place/add-place.component';
import { DetailsComponent } from './places/details/details.component';
import { SearchComponent } from './places/search/search.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { PlacesModule } from './places/places.module';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotFoundModule } from './not-found/not-found.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlacesComponent,
    AddPlaceComponent,
    DetailsComponent,
    SearchComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    PlacesModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    NotFoundModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideAuth(() => getAuth()),
  ],
  providers: [AngularFireModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
