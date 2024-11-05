// src/app/data.service.ts
import { Injectable } from "@angular/core";

export interface Restaurant {
	id: number;
	name: string;
	cuisine: string;
	location: string;
	imageUrl: string;
	description: string;
	duration: string;
	rating: number;
}

export interface MenuItem {
	id: number;
	restaurantId: number;
	name: string;
	price: number;
	description: string;
}

export interface Review {
	restaurantId: number;
	reviewerName: string;
	rating: number;
	comment: string;
}

@Injectable({
	providedIn: "root",
})
export class DataService {
	restaurants: Restaurant[] = [
		{
			id: 1,
			name: "Spicy Indian",
			cuisine: "Indian",
			location: "Downtown",
			imageUrl: "https://via.placeholder.com/150",
			description: "Delicious Indian dishes with rich flavors.",
			duration: "30-45 minutes",
			rating: 4.5,
		},
		{
			id: 2,
			name: "Italian Bistro",
			cuisine: "Italian",
			location: "City Center",
			imageUrl: "https://via.placeholder.com/150",
			description: "Authentic Italian cuisine with a modern twist.",
			duration: "45-60 minutes",
			rating: 4.0,
		},
	];

	private menuItems: MenuItem[] = [
		{
			id: 1,
			restaurantId: 1,
			name: "Butter Chicken",
			price: 12.99,
			description: "Creamy butter chicken served with naan.",
		},
		{
			id: 2,
			restaurantId: 1,
			name: "Paneer Tikka",
			price: 10.99,
			description: "Grilled paneer with spices and herbs.",
		},
		{
			id: 3,
			restaurantId: 2,
			name: "Spaghetti Carbonara",
			price: 14.99,
			description: "Classic Italian pasta with creamy sauce.",
		},
		// Add more menu items as needed
	];

	private reviews: Review[] = [
		{
			restaurantId: 1,
			reviewerName: "John Doe",
			rating: 5,
			comment: "Delicious food and great ambiance!",
		},
		{
			restaurantId: 2,
			reviewerName: "Jane Smith",
			rating: 4,
			comment: "Good pasta, but a bit overpriced.",
		},
		// Add more reviews as needed
	];

	getRestaurants() {
		return this.restaurants;
	}

	getMenuItems() {
		return this.menuItems;
	}

	getReviews() {
		return this.reviews;
	}
}
