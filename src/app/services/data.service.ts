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
	imageUrl: string;
	quantity?: number;
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
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			id: 2,
			restaurantId: 1,
			name: "Paneer Tikka",
			price: 10.99,
			description: "Grilled paneer with spices and herbs.",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			id: 3,
			restaurantId: 1,
			name: "Chole Bhature",
			price: 9.99,
			description: "Spicy chickpeas served with fried bread.",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			id: 4,
			restaurantId: 1,
			name: "Biryani",
			price: 14.99,
			description:
				"Fragrant rice cooked with spices and your choice of chicken or vegetables.",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			id: 5,
			restaurantId: 2,
			name: "Spaghetti Carbonara",
			price: 14.99,
			description: "Classic Italian pasta with creamy sauce.",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			id: 6,
			restaurantId: 2,
			name: "Margherita Pizza",
			price: 11.99,
			description:
				"Traditional pizza topped with fresh tomatoes, mozzarella, and basil.",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			id: 7,
			restaurantId: 2,
			name: "Pesto Pasta",
			price: 13.49,
			description: "Pasta tossed in a fresh basil pesto sauce.",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			id: 8,
			restaurantId: 2,
			name: "Tiramisu",
			price: 6.99,
			description:
				"Classic Italian dessert made with coffee-soaked ladyfingers and mascarpone cheese.",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			id: 9,
			restaurantId: 3,
			name: "California Roll",
			price: 8.99,
			description: "Sushi roll with crab, avocado, and cucumber.",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			id: 10,
			restaurantId: 3,
			name: "Tempura Udon",
			price: 11.49,
			description:
				"Thick wheat noodles served in a flavorful broth with tempura vegetables.",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			id: 11,
			restaurantId: 3,
			name: "Sashimi Platter",
			price: 19.99,
			description:
				"Assorted fresh sashimi served with wasabi and soy sauce.",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			id: 12,
			restaurantId: 3,
			name: "Miso Soup",
			price: 3.99,
			description: "Traditional Japanese soup made with miso paste.",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			id: 13,
			restaurantId: 4,
			name: "Tacos al Pastor",
			price: 9.99,
			description: "Tacos filled with marinated pork and pineapple.",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			id: 14,
			restaurantId: 4,
			name: "Chiles en Nogada",
			price: 12.99,
			description:
				"Poblano peppers stuffed with meat and topped with walnut sauce.",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			id: 15,
			restaurantId: 4,
			name: "Quesadilla",
			price: 7.99,
			description:
				"Flour tortilla filled with cheese and grilled to perfection.",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			id: 16,
			restaurantId: 4,
			name: "Guacamole with Chips",
			price: 6.49,
			description: "Fresh avocado dip served with crispy tortilla chips.",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			id: 17,
			restaurantId: 5,
			name: "Cheeseburger",
			price: 10.99,
			description:
				"Juicy burger topped with cheese, lettuce, and tomato.",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			id: 18,
			restaurantId: 5,
			name: "Club Sandwich",
			price: 9.49,
			description:
				"Triple-decker sandwich with turkey, bacon, and avocado.",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			id: 19,
			restaurantId: 5,
			name: "Caesar Salad",
			price: 8.99,
			description:
				"Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			id: 20,
			restaurantId: 5,
			name: "Milkshake",
			price: 4.99,
			description: "Thick and creamy milkshake in your choice of flavor.",
			imageUrl: "https://via.placeholder.com/100",
		},
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
