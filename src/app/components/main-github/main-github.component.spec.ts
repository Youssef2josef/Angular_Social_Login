import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGithubComponent } from './main-github.component';

describe('MainGithubComponent', () => {
  let component: MainGithubComponent;
  let fixture: ComponentFixture<MainGithubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainGithubComponent]
    });
    fixture = TestBed.createComponent(MainGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
