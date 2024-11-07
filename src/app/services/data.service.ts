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
			name: "Chinese Wok",
			cuisine: "Chinese",
			location: "Downtown",
			imageUrl: "assets/images/restaurants/chinese-wok.png",
			description: "Authentic Chinese cuisine with bold flavors.",
			duration: "25-35 mins",
			rating: 4.4,
		},
		{
			id: 2,
			name: "Wow Momo",
			cuisine: "Tibetan",
			location: "Midtown",
			imageUrl: "assets/images/restaurants/wow-momo.png",
			description: "Delicious momos with a variety of fillings.",
			duration: "20-30 mins",
			rating: 4.2,
		},
		{
			id: 3,
			name: "Wendy's Burgers",
			cuisine: "American",
			location: "Uptown",
			imageUrl: "assets/images/restaurants/wendys-burgers.png",
			description: "Classic burgers and sides made fresh.",
			duration: "30-40 mins",
			rating: 4.1,
		},
		{
			id: 4,
			name: "McDonald's",
			cuisine: "Fast Food",
			location: "City Center",
			imageUrl: "assets/images/restaurants/mcdonalds.png",
			description: "World-famous fast food, loved by all.",
			duration: "15-25 mins",
			rating: 4.0,
		},
		{
			id: 5,
			name: "KFC",
			cuisine: "Fast Food",
			location: "Downtown",
			imageUrl: "assets/images/restaurants/kfc.png",
			description: "Crispy fried chicken with unique seasoning.",
			duration: "20-30 mins",
			rating: 4.3,
		},
		{
			id: 6,
			name: "Subway",
			cuisine: "Sandwiches",
			location: "City Center",
			imageUrl: "assets/images/restaurants/subway.png",
			description: "Freshly made sandwiches and salads.",
			duration: "15-20 mins",
			rating: 4.2,
		},
		{
			id: 7,
			name: "Kwality Walls Ice Cream",
			cuisine: "Desserts",
			location: "Suburbs",
			imageUrl: "assets/images/restaurants/kwality-walls.png",
			description: "Delicious ice cream with a wide range of flavors.",
			duration: "10-20 mins",
			rating: 4.5,
		},
	];

	private menuItems: MenuItem[] = [
		{
			id: 1,
			restaurantId: 1,
			name: "Kung Pao Chicken",
			price: 399,
			description:
				"Spicy stir-fried chicken with peanuts and vegetables.",
			imageUrl: "assets/images/food/kung-pao-chicken.png",
		},
		{
			id: 2,
			restaurantId: 1,
			name: "Spring Rolls",
			price: 199,
			description:
				"Crispy rolls filled with fresh vegetables and shrimp.",
			imageUrl: "assets/images/food/spring-rolls.png",
		},
		{
			id: 3,
			restaurantId: 2,
			name: "Steamed Momos",
			price: 299,
			description:
				"Soft, steamed dumplings filled with vegetables or chicken.",
			imageUrl: "assets/images/food/steamed-momos.png",
		},
		{
			id: 4,
			restaurantId: 2,
			name: "Pan-Fried Momos",
			price: 349,
			description:
				"Crispy momos fried to perfection, served with spicy sauce.",
			imageUrl: "assets/images/food/pan-fried-momos.png",
		},
		{
			id: 5,
			restaurantId: 3,
			name: "Classic Burger",
			price: 249,
			description: "Beef burger with lettuce, tomato, and cheese.",
			imageUrl: "assets/images/food/classic-burger.png",
		},
		{
			id: 6,
			restaurantId: 3,
			name: "Spicy Chicken Burger",
			price: 279,
			description: "Crispy chicken burger with spicy sauce and pickles.",
			imageUrl: "assets/images/food/spicy-chicken-burger.png",
		},
		{
			id: 7,
			restaurantId: 4,
			name: "Big Mac",
			price: 199,
			description:
				"Iconic burger with two beef patties and special sauce.",
			imageUrl: "assets/images/food/big-mac.png",
		},
		{
			id: 8,
			restaurantId: 4,
			name: "McNuggets",
			price: 149,
			description: "Crispy chicken nuggets with dipping sauces.",
			imageUrl: "assets/images/food/mc-nuggets.png",
		},
		{
			id: 9,
			restaurantId: 5,
			name: "Original Recipe Chicken",
			price: 249,
			description:
				"Famous fried chicken with a secret blend of 11 herbs and spices.",
			imageUrl: "assets/images/food/og-recipe-chicken.png",
		},
		{
			id: 10,
			restaurantId: 5,
			name: "Zinger Burger",
			price: 299,
			description: "Spicy chicken fillet with lettuce and mayonnaise.",
			imageUrl: "assets/images/food/zinger-burger.png",
		},
		{
			id: 11,
			restaurantId: 6,
			name: "Footlong Sub",
			price: 499,
			description:
				"12-inch sub with your choice of fillings and toppings.",
			imageUrl: "assets/images/food/footlong-sub.png",
		},
		{
			id: 12,
			restaurantId: 6,
			name: "Veggie Delight Sub",
			price: 349,
			description: "Fresh veggie sub with lettuce, tomato, and cucumber.",
			imageUrl: "assets/images/food/veggie-delight-sub.png",
		},
		{
			id: 13,
			restaurantId: 7,
			name: "Vanilla Ice Cream Tub",
			price: 149,
			description: "Classic vanilla ice cream in a family-size tub.",
			imageUrl: "assets/images/food/vanilla-ice-cream-tub.png",
		},
		{
			id: 14,
			restaurantId: 7,
			name: "Chocolate Cone",
			price: 79,
			description: "Creamy chocolate ice cream in a crispy cone.",
			imageUrl: "assets/images/food/chocolate-cone.png",
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
