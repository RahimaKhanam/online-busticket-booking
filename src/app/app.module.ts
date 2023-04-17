import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusListComponent } from './components/bus/bus-list/bus-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BusRouteListComponent } from './components/bus/bus-route-list/bus-route-list.component';
import { BusSeatViewComponent } from './components/bus/bus-seat-view/bus-seat-view.component';
import { ReservationSuccessComponent } from './components/reservation-success/reservation-success.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BusListComponent,
    BusRouteListComponent,
    BusSeatViewComponent,
    ReservationSuccessComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
