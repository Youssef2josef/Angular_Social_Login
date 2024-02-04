import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LightModeService {

  private lightModeSubject = new BehaviorSubject<boolean>(true);
  darkMode$ = this.lightModeSubject.asObservable();

  toggleLightMode() {
    const currentMode = this.lightModeSubject.value;
    this.lightModeSubject.next(!currentMode);
  }
}
