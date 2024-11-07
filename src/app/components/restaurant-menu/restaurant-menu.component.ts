import { Component, OnInit } from "@angular/core";
import { CartService } from "../../services/cart.service";
import {
	DataService,
	MenuItem,
	Review,
	Restaurant,
} from "../../services/data.service";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
	selector: "app-restaurant-menu",
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: "./restaurant-menu.component.html",
	styleUrls: ["./restaurant-menu.component.css"],
})
export class RestaurantMenuComponent implements OnInit {
	menuItems: MenuItem[] = [];
	reviews: Review[] = [];
	restaurant: Restaurant | null = null;
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
		this.restaurant = foundRestaurant ? foundRestaurant : null;
	}

	increaseQuantity(menuItem: MenuItem): void {
		menuItem.quantity = (menuItem.quantity || 1) + 1;
	}

	// Decrease quantity method
	decreaseQuantity(menuItem: MenuItem): void {
		// Ensure quantity is at least 1
		if ((menuItem.quantity || 1) > 1) {
			menuItem.quantity = (menuItem.quantity || 1) - 1;
		}
	}

	// Add item to cart
	addToCart(menuItem: MenuItem): void {
		this.cartService.addToCart({
			...menuItem,
			quantity: menuItem.quantity || 1,
		});
		this.cartService.updateCartCount();
	}
}
