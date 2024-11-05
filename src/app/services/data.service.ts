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
	imageUrl: string; // Add imageUrl property here
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
			duration: "30-45 mins",
			rating: 4.5,
		},
		{
			id: 2,
			name: "Italian Bistro",
			cuisine: "Italian",
			location: "City Center",
			imageUrl: "https://via.placeholder.com/150",
			description: "Authentic Italian cuisine with a modern twist.",
			duration: "45-60 mins",
			rating: 4.0,
		},
		{
			id: 3,
			name: "Sushi Palace",
			cuisine: "Japanese",
			location: "Uptown",
			imageUrl: "https://via.placeholder.com/150",
			description: "Fresh sushi and sashimi prepared by expert chefs.",
			duration: "20-30 mins",
			rating: 4.8,
		},
		{
			id: 4,
			name: "Taco Fiesta",
			cuisine: "Mexican",
			location: "Midtown",
			imageUrl: "https://via.placeholder.com/150",
			description: "Vibrant tacos and burritos with bold flavors.",
			duration: "15-25 mins",
			rating: 4.2,
		},
		{
			id: 5,
			name: "Classic American Diner",
			cuisine: "American",
			location: "Suburbs",
			imageUrl: "https://via.placeholder.com/150",
			description: "Traditional American dishes with a cozy atmosphere.",
			duration: "30-50 mins",
			rating: 4.3,
		},
	];

	private menuItems: MenuItem[] = [
		{
			id: 1,
			restaurantId: 1,
			name: "Butter Chicken",
			price: 12.99,
			description: "Creamy butter chicken served with naan.",
			imageUrl: "https://via.placeholder.com/100", // Add image URL for the menu item
		},
		{
			id: 2,
			restaurantId: 1,
			name: "Paneer Tikka",
			price: 10.99,
			description: "Grilled paneer with spices and herbs.",
			imageUrl: "https://via.placeholder.com/100", // Add image URL for the menu item
		},
		{
			id: 3,
			restaurantId: 2,
			name: "Spaghetti Carbonara",
			price: 14.99,
			description: "Classic Italian pasta with creamy sauce.",
			imageUrl: "https://via.placeholder.com/100", // Add image URL for the menu item
		},
		// Add more menu items as needed with image URLs
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
