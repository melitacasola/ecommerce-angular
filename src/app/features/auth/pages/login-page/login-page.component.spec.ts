import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/authService/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialsModule } from '../../../../shared/angular-materials/angular-materials.module';
import { of } from 'rxjs';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { authInterceptor } from '../../../../core/interceptors/auth.interceptor';

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
  let authService: AuthService


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        AngularMaterialsModule,
        HttpClientModule,
        RouterModule.forRoot([])
      ],
      declarations: [LoginPageComponent],
      providers: [
        AuthService,
        {
          provide: HTTP_INTERCEPTORS,
          useValue: authInterceptor,
          multi: true
        }

      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService)
    router = TestBed.inject(Router);
    TestBed.inject(FormBuilder)


    fixture.detectChanges();
  });

  it('debe crear el login component', ()=>{
    expect(component).toBeTruthy()
  });

  it('debe crear un form inicio de sesion valido', () =>{
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm instanceof FormGroup).toBeTruthy();
    expect(component.loginForm.get('email')).toBeDefined();
    expect(component.loginForm.get('password')).toBeDefined()
  })

  it('debe indicar campos invalidos al estar vacio', () =>{
    const emailControl = component.loginForm.get('email');
    const passwordControl = component.loginForm.get('password');

    expect(emailControl?.invalid).toBeTruthy()
    expect(passwordControl?.invalid).toBeTruthy()
  })

  it('debe marcar campos validos',() =>{
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('test@mail.com')
    expect(emailControl?.valid).toBeTruthy()
  })
  it('debe marcar campos validos',() =>{
    const passwordControl = component.loginForm.get('password');
    passwordControl?.setValue('12345')
    expect(passwordControl?.valid).toBeTruthy()
  });

  it('debe mandar el formulario cuando click en onSubmit',() =>{
    spyOn(component, 'onSubmit');
    const emailControl = component.loginForm.get('email');
    const passwordControl = component.loginForm.get('password');
    emailControl?.setValue('maria@mail.com')
    passwordControl?.setValue('12345')

    const formElement: HTMLFormElement = fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(component.onSubmit).toHaveBeenCalled();

  })

})
