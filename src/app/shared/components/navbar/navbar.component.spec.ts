import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';
import { AuthService } from '../../../core/services/authService/auth.service';

import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from '../../../core/interceptors/auth.interceptor';
import { AngularMaterialsModule } from '../../angular-materials/angular-materials.module';



describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [HttpClientTestingModule, AngularMaterialsModule, RouterModule.forRoot([])],
      providers: [
        AuthService,
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe tener un link a la pagina Products', () =>{
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const linkProduct = debugElements.some((item) => item.attributes['routerLink']=== '/home/products');
    expect(linkProduct).toBeTruthy();
  })
});
