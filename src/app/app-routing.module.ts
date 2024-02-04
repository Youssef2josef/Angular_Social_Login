import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { MainFacebookComponent } from './components/main-facebook/main-facebook.component';
import { MainGithubComponent } from './components/main-github/main-github.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'Main/Facebook', component: MainFacebookComponent },
  { path: 'Main/Github', component: MainGithubComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
