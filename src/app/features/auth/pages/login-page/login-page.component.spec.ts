import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Location } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/authService/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialsModule } from '../../../../shared/angular-materials/angular-materials.module';
import { async, of } from 'rxjs';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';

import { authInterceptor } from '../../../../core/interceptors/auth.interceptor';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { HomePageComponent } from '../../../products/pages/home-page/home-page.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ITokens } from '../../../../core/interfaces/tokens.interface';
import { ILogin } from '../../../../core/interfaces/login.interface';
import { notificationInterceptor } from '../../../../core/interceptors/notification.interceptor';

// describe('LoginPageComponent', () => {
//   let component: LoginPageComponent;
//   let fixture: ComponentFixture<LoginPageComponent>;
//   let authService: AuthService;
//   let router: Router;


//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         ReactiveFormsModule,
//         AngularMaterialsModule,
//         HttpClientModule,
//         RouterModule.forRoot([])
//       ],
//       declarations: [LoginPageComponent],
//       providers: [
//         AuthService,
//         {
//           provide: HTTP_INTERCEPTORS,
//           useValue: authInterceptor,
//           multi: true
//         }

//       ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(LoginPageComponent);
//     component = fixture.componentInstance;
//     authService = TestBed.inject(AuthService)
//     router = TestBed.inject(Router)

//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should navigate to home on successful login', fakeAsync(() => {
//     spyOn(authService, 'login').and.returnValue(of({access_token: 'fake-token', refresh_token: 'fake-token'}));
//     spyOn(router, 'navigate').and.stub();

//     component.loginForm.setValue({email: 'admin@mail.com', password: 'admin123'})
//     component.onSubmit()

//     tick();

//     expect(authService.login).toHaveBeenCalled();
//     expect(sessionStorage.getItem('access_token')).toEqual('fake-token');
//     expect(router.navigate).toHaveBeenCalledOnceWith(['home'])

//   }));
// });


describe('LoginComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>
  let router: Router;
  let authService: AuthService;
  let routerLocation: Location;
  let httpTestingController: HttpTestingController;
  let token: ITokens;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        AngularMaterialsModule,
        // HttpClientModule,
        RouterModule.forRoot([
          { path: 'auth/login', component: LoginPageComponent },
          { path: 'home', component: HomePageComponent }])
      ],
      declarations: [LoginPageComponent],
      providers: [
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClient(withInterceptors([notificationInterceptor])),
        provideHttpClientTesting(),

      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService)
    router = TestBed.inject(Router);
    TestBed.inject(FormBuilder);
    routerLocation = TestBed.inject(Location)


    fixture.detectChanges();
  });

  it('debe crear el login component', () => {
    expect(component).toBeTruthy()
  });

  it('debe crear un form inicio de sesion valido', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm instanceof FormGroup).toBeTruthy();
    expect(component.loginForm.get('email')).toBeDefined();
    expect(component.loginForm.get('password')).toBeDefined()
  })

  it('debe indicar campos invalidos al estar vacio', () => {
    const emailControl = component.loginForm.get('email');
    const passwordControl = component.loginForm.get('password');

    expect(emailControl?.invalid).toBeTruthy()
    expect(passwordControl?.invalid).toBeTruthy()
  })

  it('debe marcar campos validos', () => {
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('test@mail.com')
    expect(emailControl?.valid).toBeTruthy()
  })

  it('debe marcar campos validos', () => {
    const passwordControl = component.loginForm.get('password');
    passwordControl?.setValue('12345')
    expect(passwordControl?.valid).toBeTruthy()
  });

  it('debe mandar el formulario cuando click en onSubmit', () => {
    spyOn(component, 'onSubmit');
    const emailControl = component.loginForm.get('email');
    const passwordControl = component.loginForm.get('password');
    emailControl?.setValue('maria@mail.com')
    passwordControl?.setValue('12345')

    const formElement: HTMLFormElement = fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(component.onSubmit).toHaveBeenCalled();

  });
  it('debe mandar el formulario cuando click en onSubmit( servicio)', () => {
    const refElement = fixture.elementRef;
    const items = refElement.nativeElement;
    const label = items.querySelector('#label-id');

    expect(label).toBeTruthy();

    label.click()
    fixture.detectChanges();

    const email = items.querySelector('#email')
    const password = items.querySelector('#password')
    const button = items.querySelector('#loginBtn')

    fixture.detectChanges();

    router.events.subscribe(data => console.log(data));

    email.value = 'maria@mail.com';
    password.value = '12345';

    fixture.detectChanges();

    email.dispatchEvent(new Event('input'))
    password.dispatchEvent(new Event('input'))

    button.click()
    fixture.detectChanges();

  });


  it('deberia redirigir a la Home luego de login success', fakeAsync(() => {
    spyOn(authService, 'login').and.returnValue(of<ITokens>({ access_token: 'fake-token', refresh_token: 'fake-token' }));
    spyOn(router, 'navigate').and.stub();

    component.loginForm.setValue({ email: 'test@mail.com', password: 'testxsxsx123' });
    component.onSubmit();

    tick();

    expect(authService.login).toHaveBeenCalled();
    expect(sessionStorage.getItem('access_token')).toEqual('fake-token');
    expect(router.navigate).toHaveBeenCalledOnceWith(['home']);
  }));


  // it('debería retornar un tipo IToken en el método de login', fakeAsync(() => {
  //   spyOn(authService, 'login').and.returnValue(of<ITokens>({ access_token: 'fake-token', refresh_token: 'fake-token' }));


  //   const body: ILogin = { email: 'test@mail.com', password: 'testxsxsx123' }
  //   authService.login({ email: 'test@mail.com', password: 'testxsxsx123' }).subscribe(result => token = result);

  //   tick();

  //   expect(token).toBeTruthy();
  //   expect(token.access_token).toBeDefined();
  //   expect(token.refresh_token).toBeDefined();
  // }));


  // it('deberia redirigir a la Home luego de login success', fakeAsync(() => {
  //   spyOn(authService, 'login').and.returnValue(of({ access_token: 'fake-token', refresh_token: 'fake-token' }));
  //   spyOn(router, 'navigate').and.stub();

  //   component.loginForm.setValue({ email: 'test@mail.com', password: 'testxsxsx123' })
  //   component.onSubmit()

  //   tick();

  //   expect(authService.login).toHaveBeenCalled();
  //   expect(sessionStorage.getItem('access_token')).toEqual('fake-token');
  //   expect(router.navigate).toHaveBeenCalledOnceWith(['home'])

  // }));

  //este test da error porqe dice qe no se pueden hacer peticiones reales;
  //y al hacerlo, me genera un token verídico, entonces DA error la page de arriba


  // it('el componente se llama una vez al hacer login', (() => {
  //   let loginElement: DebugElement;
  //   const debugElement = fixture.debugElement;
  //   authService = debugElement.injector.get(AuthService);
  //   let loginSpy = spyOn(authService , 'login').and.callThrough();
  //   loginElement = fixture.debugElement.query(By.css('.form-container'));

  //   component.loginForm.controls['email'].setValue('test@mail.com');
  //   component.loginForm.controls['password'].setValue('12345');
  //   fixture.detectChanges()
  //   loginElement.triggerEventHandler('ngSubmit');
  //   expect(loginSpy).toHaveBeenCalledTimes(1);
  //  }));


})
