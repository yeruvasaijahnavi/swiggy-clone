import { Component, OnInit } from "@angular/core";
import { CartService } from "../../services/cart.service";
import {
	DataService,
	MenuItem,
	Review,
	Restaurant,
} from "../../services/data.service"; // Import Restaurant here
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-restaurant-menu",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./restaurant-menu.component.html",
	styleUrls: ["./restaurant-menu.component.css"],
})
export class RestaurantMenuComponent implements OnInit {
	menuItems: MenuItem[] = [];
	reviews: Review[] = [];
	restaurant: Restaurant | null = null; // Define the restaurant property
	restaurantId!: number;

	constructor(
		private cartService: CartService,
		private dataService: DataService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.restaurantId = Number(this.route.snapshot.paramMap.get("id"));

		// Fetching the menu items and reviews
		this.menuItems = this.dataService
			.getMenuItems()
			.filter((item) => item.restaurantId === this.restaurantId);

		this.reviews = this.dataService
			.getReviews()
			.filter((review) => review.restaurantId === this.restaurantId);

		// Fetching the restaurant details safely
		const foundRestaurant = this.dataService
			.getRestaurants()
			.find((restaurant) => restaurant.id === this.restaurantId);
		this.restaurant = foundRestaurant ? foundRestaurant : null; // Setting to null if not found
	}

	addToCart(menuItem: MenuItem): void {
		this.cartService.addToCart({ ...menuItem, quantity: 1 });
		this.cartService.updateCartCount();
	}
}
