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
import { CommentComponent } from './Component/home/posts/comment/comment.component';
import { RatingComponent } from './Component/home/posts/rating/rating.component';
import { AgmCoreModule } from '@agm/core';
import { AdsComponent } from './Component/ads/ads.component';
import { AllEventsModalComponent } from './Component/events/all-events-modal/all-events-modal.component';
import { EventDetailsComponent } from './Component/events/event-details/event-details.component';
import { SigninComponent } from './Component/signin/signin.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { Routes } from '@angular/router';
import { MainComponent } from '../app/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PublishComponent,
    EventsComponent,
    PostsComponent,
    MapComponent,
    HomeComponent,
    AdsComponent,
    RatingComponent,
    CommentComponent,
    AllEventsModalComponent,
    EventDetailsComponent,
    SigninComponent,
    ProfileComponent,
    MainComponent 
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
