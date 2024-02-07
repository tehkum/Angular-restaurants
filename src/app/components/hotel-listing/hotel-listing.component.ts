import { Component, OnInit } from '@angular/core';
import { HotelDataService } from '../../services/hotel-data.service';
import { Restaurant } from '../../data/restaurant';

@Component({
  selector: 'app-hotel-listing',
  templateUrl: './hotel-listing.component.html',
  styleUrl: './hotel-listing.component.css',
})
export class HotelListingComponent implements OnInit {
  restautants: Restaurant[] = [];

  constructor(public hotelDataService: HotelDataService) {}

  ngOnInit() {
    this.restautants = this.hotelDataService.restaurants;
  }
}
