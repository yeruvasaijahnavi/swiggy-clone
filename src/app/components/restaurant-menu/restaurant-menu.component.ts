import { Component, OnInit } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { DataService, MenuItem, Restaurant } from "../../services/data.service";
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
	restaurant: Restaurant | null = null;
	restaurantId!: number;

	constructor(
		private cartService: CartService,
		private dataService: DataService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		// Set the restaurantId from route parameters first
		this.restaurantId = Number(this.route.snapshot.paramMap.get("id"));

		// Fetch menu items and set quantity to 1 if undefined
		this.menuItems = this.dataService
			.getMenuItems()
			.filter((item) => item.restaurantId === this.restaurantId)
			.map((item) => ({ ...item, quantity: item.quantity ?? 1 }));

		// Fetch restaurant details
		const foundRestaurant = this.dataService
			.getRestaurants()
			.find((restaurant) => restaurant.id === this.restaurantId);
		this.restaurant = foundRestaurant ? foundRestaurant : null;
	}

	increaseQuantity(menuItem: MenuItem): void {
		menuItem.quantity = (menuItem.quantity || 1) + 1;
	}

	decreaseQuantity(menuItem: MenuItem): void {
		if ((menuItem.quantity || 1) > 1) {
			menuItem.quantity = (menuItem.quantity || 1) - 1;
		}
	}

	addToCart(menuItem: MenuItem): void {
		this.cartService.addToCart({
			...menuItem,
			quantity: menuItem.quantity || 1,
		});
		this.cartService.updateCartCount();
	}
}
