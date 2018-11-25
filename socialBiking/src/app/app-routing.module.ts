import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './Component/signin/signin.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {path : 'signin' ,
  component :  SigninComponent ,
  },  {path : '' ,
  component :  MainComponent ,
  } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
