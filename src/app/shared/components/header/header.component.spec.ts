import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/authService/auth.service';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  HttpClientTestingModule,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { authInterceptor } from '../../../core/interceptors/auth.interceptor';
import { AngularMaterialsModule } from '../../angular-materials/angular-materials.module';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        HttpClientTestingModule,
        AngularMaterialsModule,
        RouterModule.forRoot([]),
      ],
      providers: [
        AuthService,
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe tener un link a la pagina Products', () => {
    const debugElements = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );
    const linkProduct = debugElements.some(
      (item) => item.attributes['routerLink'] === '/home/products'
    );
    expect(linkProduct).toBeTruthy();
  });
});
