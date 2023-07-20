import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { BookingformComponent } from './components/bookingform/bookingform.component';
import { SearchHotelComponent } from './components/search-hotel/search-hotel.component';
import { ShowhotelsComponent } from './components/showhotels/showhotels.component';
import { CorouselComponent } from './components/corousel/corousel.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchHotelComponent,
    ShowhotelsComponent,
    HotelDetailsComponent,
    BookingformComponent,
    CorouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
