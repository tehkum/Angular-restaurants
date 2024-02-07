interface Comment {
  message: string | null;
}

export interface Restaurant {
  restaurant_name: string;
  restaurant_description: string;
  restaurant_address: string;
  restaurant_city: string;
  restaurant_state: string | null;
  restaurant_country: string;
  restaurant_phone: string;
  restaurant_website: string;
  restaurant_rating: number;
  restaurant_images: string;
  comment: Comment[];
}
