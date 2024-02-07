import { Component, Input } from '@angular/core';
import { HotelDataService } from '../../../services/hotel-data.service';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.css',
})
export class RestaurantCardComponent {
  @Input('restaurant') restaurant: any;

  constructor(public hotelDataService: HotelDataService) {}
}
