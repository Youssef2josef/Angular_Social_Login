import { Component, OnInit } from '@angular/core';
import { AuthGoogleService } from '../../services/auth-google.service';
import { DarkModeService } from 'src/app/dark-mode.service';
import { FacebookLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';

declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  socialUser!: SocialUser;
  isLoggedin?: boolean = undefined;

  constructor(private authGoogleService: AuthGoogleService,
    private darkModeService: DarkModeService,
    private socialAuthService: SocialAuthService,
    private router: Router,
    )
  { }

  ngOnInit() {
  }

  get darkMode() {
    return this.darkModeService.darkMode$;
  }

  login() {
    this.authGoogleService.login();
  }

  signInWithFB(): void {
    console.log("submit login to facebook");
    FB.login((response:any)=>
        {
          console.log('submitLogin',response);
          if (response.authResponse)
          {
            console.log(response);
          }
           else
           {
           console.log('User login failed');
         }
      });
      
  }

  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
    });
    console.log(this.socialUser);
  }

}
