import { Component } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-restaurant-menu",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./restaurant-menu.component.html",
	styleUrl: "./restaurant-menu.component.css",
})
export class RestaurantMenuComponent {
	restaurant: any; // This will hold the restaurant details
	menuItems: any[] = []; // This will hold the menu items

	constructor(private cartService: CartService) {}

	ngOnInit() {
		// Fetch restaurant details and menu items (you can use static data for now)
		this.restaurant = {
			name: "Example Restaurant",
			description: "A great place to eat!",
		};
		this.menuItems = [
			{ id: 1, name: "Pizza", price: 500 },
			{ id: 2, name: "Burger", price: 300 },
			{ id: 3, name: "Pasta", price: 400 },
		];
	}

	addToCart(item: any) {
		this.cartService.addToCart(item);
		console.log(this.cartService.getCartItems()); // Check the cart items in the console
	}
}
