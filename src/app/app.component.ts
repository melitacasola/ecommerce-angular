import { AfterViewChecked, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { LoadService } from './core/loading-overlay/loading-overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewChecked {
  private loadService = inject(LoadService);
  private cdRef = inject(ChangeDetectorRef);
  public isLoading: boolean = false;

  ngOnInit(): void {
    this.isLoading = this.loadService.isLoading;
  }
   
  ngAfterViewChecked(): void {
    if (this.cdRef && this.isLoading !== this.loadService.isLoading) {
      this.isLoading = this.loadService.isLoading;
      this.cdRef.detectChanges();
    }
  }

}
