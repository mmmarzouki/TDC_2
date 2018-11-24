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
import { RatingComponent } from './component/home/posts/rating/rating.component';


<<<<<<< HEAD
=======
import { AgmCoreModule } from '@agm/core';
import { AdsComponent } from './Component/ads/ads.component';
>>>>>>> 3f0e77dcc17c64517b579c19ccf1b40ef37f31d4

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PublishComponent,
    EventsComponent,
    PostsComponent,
    MapComponent,
    HomeComponent,
<<<<<<< HEAD
    CommentComponent,
    RatingComponent
=======
    AdsComponent
>>>>>>> 3f0e77dcc17c64517b579c19ccf1b40ef37f31d4
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
