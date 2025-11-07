import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LayoutService } from './services/layout-service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  layoutService = inject(LayoutService);
}
