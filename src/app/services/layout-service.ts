import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  #breakpointObserver = inject(BreakpointObserver);
  #web = signal<boolean>(false);

  constructor() {
    this.#breakpointObserver
      .observe([Breakpoints.WebLandscape, Breakpoints.WebPortrait])
      .pipe(takeUntilDestroyed())
      .subscribe((result) => {
        this.#web.set(result.matches);
      });
  }

  get isWeb() {
    return this.#web.asReadonly();
  }
}
