import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent implements OnDestroy {
  private readonly destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  // public ngOnDestroy(): void {
  //   // this.destroy$.next();
  //   // this.destroy$.complete();
  // }
}
