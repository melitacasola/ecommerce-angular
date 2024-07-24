import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePrincipalComponent } from './home-principal.component';
import { AuthService } from '../../../../core/services/authService/auth.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { authInterceptor } from '../../../../core/interceptors/auth.interceptor';
import { AngularMaterialsModule } from '../../../../shared/angular-materials/angular-materials.module';
import { SharedModule } from '../../../../shared/shared.module';

describe('HomePrincipalComponent', () => {
  let component: HomePrincipalComponent;
  let fixture: ComponentFixture<HomePrincipalComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePrincipalComponent],
      imports: [HttpClientTestingModule, AngularMaterialsModule, SharedModule, RouterModule.forRoot([])],
      providers: [
        AuthService,
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
