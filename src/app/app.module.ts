import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusListComponent } from './components/bus/bus-list/bus-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BusRouteListComponent } from './components/bus/bus-route-list/bus-route-list.component';
import { BusSeatViewComponent } from './components/bus/bus-seat-view/bus-seat-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BusListComponent,
    BusRouteListComponent,
    BusSeatViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
