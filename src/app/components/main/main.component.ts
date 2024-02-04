import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from 'src/app/dark-mode.service';
import { AuthGoogleService } from 'src/app/services/auth-google.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  
})
export class MainComponent {

  list: any;

  constructor(private darkModeService: DarkModeService,
    private authGoogleService: AuthGoogleService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.list = this.authGoogleService.getProfile()
    if(this.list == undefined){
    Swal.fire({
      title: 'Info',
      text: "Reaload the page once again",
      icon: 'info',
      confirmButtonText: 'OK',
      timer: 2000
    });
    }
  }

  get darkMode() {
    return this.darkModeService.darkMode$;
  }

  showData() {
    const data = JSON.stringify(this.authGoogleService.getProfile())
    console.log(data);
  }

  logOut() {
    this.authGoogleService.logout();
    this.router.navigate(['login']);
  }  

}
