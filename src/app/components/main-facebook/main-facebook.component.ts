import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-facebook',
  templateUrl: './main-facebook.component.html',
  styleUrls: ['./main-facebook.component.css']
})
export class MainFacebookComponent implements OnInit {

  user: any;
  loggedIn: any;

  constructor(private authService: SocialAuthService,
    private router :Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    console.log(this.user);
  }

  signOut(): void {
    this.authService.signOut();
    this.router.navigate(['login']);
  }

}
