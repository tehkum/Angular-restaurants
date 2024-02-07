import { Component } from '@angular/core';
import { HotelDataService } from '../../services/hotel-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(public hotelDataService: HotelDataService) {}

  onChangeHandler() {
    this.hotelDataService.filterRestaurants();
    console.log(this.hotelDataService.filteredRestaurants);
  }
}
