import { Injectable } from '@angular/core';
import { restaurantData } from '../data/data';
import { Restaurant } from '../data/restaurant';

@Injectable({
  providedIn: 'root',
})
export class HotelDataService {
  restaurants: Restaurant[] = restaurantData;
  searchRestaurant: string = '';
  filteredRestaurants: Restaurant[] = this.restaurants;

  filterRestaurants() {
    if (this.searchRestaurant) {
      this.filteredRestaurants = this.restaurants.filter((restaurant) =>
        restaurant.restaurant_name
          .toLowerCase()
          .includes(this.searchRestaurant.toLowerCase())
      );
    } else {
      this.filteredRestaurants = this.restaurants;
    }
  }
}
