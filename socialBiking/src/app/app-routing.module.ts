import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './Component/signin/signin.component';
import { MainComponent } from '../app/main/main.component';
import { ProfileComponent } from './Component/profile/profile.component';
const routes: Routes = [
  {path : 'signin' ,
  component :  SigninComponent ,
  },  {path : '' ,
  component :  MainComponent ,
  }, {path : 'profile' ,
  component :  ProfileComponent ,
  } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
