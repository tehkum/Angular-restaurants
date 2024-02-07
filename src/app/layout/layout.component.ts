import { Component } from '@angular/core';
import { HotelDataService } from '../services/hotel-data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  providers: [HotelDataService],
})
export class LayoutComponent {
  constructor(public hotelDataService: HotelDataService) {}
}
