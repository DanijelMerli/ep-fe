import {
  Component,
  ElementRef,
  NgZone,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  Router,
  RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent {
  constructor(
    private router: Router,
    private ngZone: NgZone,
    private renderer: Renderer2
  ) {
    this.router.events.subscribe((e: RouterEvent) =>
      this.navigationInterceptor(e)
    );
  }

  @ViewChild('loaderElement') loaderElement: ElementRef;

  private navigationInterceptor(e: RouterEvent) {
    if (e instanceof NavigationStart) {
      this.showLoader();
    }
    if (e instanceof NavigationEnd) {
      this.hideLoader();
    }

    if (e instanceof NavigationCancel) {
      this.hideLoader();
    }
    if (e instanceof NavigationError) {
      this.hideLoader();
    }
  }

  private showLoader() {
    this.ngZone.runOutsideAngular(() => {
      this.renderer.addClass(this.loaderElement.nativeElement, 'loading');
    });
  }

  private hideLoader() {
    this.ngZone.runOutsideAngular(() => {
      this.renderer.removeClass(this.loaderElement.nativeElement, 'loading');
    });
  }
}
