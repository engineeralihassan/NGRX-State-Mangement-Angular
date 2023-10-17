import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/stor/counter.reducers';
import { CounterbuttonComponent } from './components/counterbutton/counterbutton.component';
import { CounterdispalyComponent } from './components/counterdispaly/counterdispaly.component';
import { CustomcounterComponent } from './customcounter/customcounter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterbuttonComponent,
    CounterdispalyComponent,
    CustomcounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter:counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
