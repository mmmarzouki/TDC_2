import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { PublishComponent } from './Component/home/publish/publish.component';
import { EventsComponent } from './Component/events/events.component';
import { PostsComponent } from './Component/home/posts/posts.component';
import { MapComponent } from './Component/map/map.component';
import { HomeComponent } from './Component/home/home.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PublishComponent,
    EventsComponent,
    PostsComponent,
    MapComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbiqHO3ZMfbWzXbtFetqIG7DLybCyzEVg'
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
