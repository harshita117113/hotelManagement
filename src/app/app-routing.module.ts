import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchHotelComponent } from './components/search-hotel/search-hotel.component';

const routes: Routes = [
  {path: 'home', component: SearchHotelComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
