import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { BookingformComponent } from './components/bookingform/bookingform.component';
import { ShowhotelsComponent } from './components/showhotels/showhotels.component';
import { SearchHotelComponent } from './components/search-hotel/search-hotel.component';

const routes: Routes = [
  {path: 'home', component: SearchHotelComponent},
  {path: 'hotels', component: ShowhotelsComponent},
  {path: 'hoteldetails', component: HotelDetailsComponent},
  {path: 'booking', component: BookingformComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
