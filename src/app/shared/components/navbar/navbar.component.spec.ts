// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { NavbarComponent } from './navbar.component';
// import { RouterLinkWithHref, RouterModule } from '@angular/router';
// import { By } from '@angular/platform-browser';



// describe('NavbarComponent', () => {
//   let component: NavbarComponent;
//   let fixture: ComponentFixture<NavbarComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [NavbarComponent],
//       imports:[RouterModule.forRoot([])]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(NavbarComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('debe tener un link a la pagina Products', () =>{
//     const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
//     const linkProduct = debugElements.some((item) => item.attributes['routerLink']=== '/home/products');
//     expect(linkProduct).toBeTruthy();
//   })
// });
