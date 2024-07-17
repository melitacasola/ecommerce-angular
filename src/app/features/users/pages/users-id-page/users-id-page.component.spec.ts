import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersIdPageComponent } from './users-id-page.component';

describe('UsersIdPageComponent', () => {
  let component: UsersIdPageComponent;
  let fixture: ComponentFixture<UsersIdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersIdPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersIdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
