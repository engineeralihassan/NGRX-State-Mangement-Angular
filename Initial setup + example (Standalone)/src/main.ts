import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';

import { AppComponent } from './app/app.component';
import { counterReducer } from './app/store/counter.reducer';

bootstrapApplication(AppComponent, {
  providers: [provideStore({ counter: counterReducer })],
});
