import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusListComponent } from './components/bus/bus-list/bus-list.component';
import { BusRouteListComponent } from './components/bus/bus-route-list/bus-route-list.component';
import { BusSeatViewComponent } from './components/bus/bus-seat-view/bus-seat-view.component';

const routes: Routes = [
  {path: '', redirectTo: 'bus-list', pathMatch: 'full'},
  {path: 'bus-list', component: BusListComponent},
  {path: 'bus-route-list/:bid', component: BusRouteListComponent},
  {path: 'bus-seat-view/:brid', component: BusSeatViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
