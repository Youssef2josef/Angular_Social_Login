import { Component } from '@angular/core';
import { DarkModeService } from './dark-mode.service';
import { LightModeService } from './light-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular & Login';
  constructor(private darkModeService: DarkModeService,private lightModeService: LightModeService) {}

  get darkMode() {
    return this.darkModeService.darkMode$;
  }

  get lightMode() {
    return this.lightModeService.darkMode$;
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
    this.lightModeService.toggleLightMode();
  }

  toggleLightMode() {
    this.lightModeService.toggleLightMode();
    this.darkModeService.toggleDarkMode();
  }
}
