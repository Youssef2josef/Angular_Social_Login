import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFacebookComponent } from './main-facebook.component';

describe('MainFacebookComponent', () => {
  let component: MainFacebookComponent;
  let fixture: ComponentFixture<MainFacebookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainFacebookComponent]
    });
    fixture = TestBed.createComponent(MainFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
