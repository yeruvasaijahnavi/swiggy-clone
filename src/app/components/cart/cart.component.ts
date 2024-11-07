import { Component } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { CommonModule } from "@angular/common";
import { OrderService } from "../../services/order.service";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
@Component({
	selector: "app-cart",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./cart.component.html",
	styleUrl: "./cart.component.css",
})
export class CartComponent {
	cartItems: any[] = [];
	totalCost: number = 0;

	constructor(
		private cartService: CartService,
		private orderService: OrderService,
		private router: Router,
		private authService: AuthService
	) {}

	ngOnInit(): void {
		this.cartItems = this.cartService.getCartItems();
		this.calculateTotalCost();
	}

	calculateTotalCost() {
		this.totalCost = this.cartItems.reduce(
			(sum, item) => sum + item.price * item.quantity,
			0
		);
	}

	removeFromCart(item: any) {
		this.cartService.removeFromCart(item.id);
		this.cartItems = this.cartService.getCartItems(); // Refresh the cart items
		this.calculateTotalCost(); // Recalculate the total cost
	}

	onOrder() {
		if (!this.authService.isLoggedIn()) {
			alert("You need to login first before you can place an order.");
			this.router.navigate(["/login"]);
			return; // Stop further execution of the order process
		}

		if (this.cartItems.length === 0) {
			alert("Your cart is empty!");
			return;
		}

		// Pass the total cost along with the cart items when placing an order
		const orderData = {
			items: this.cartItems,
			totalCost: this.totalCost, // Pass the total cost to the order
		};

		this.orderService.placeOrder(orderData).subscribe({
			next: (response) => {
				console.log("Order placed successfully:", response);
				this.cartItems = []; // Clear the cart after order
				this.router.navigate(["/orders"]); // Navigate to orders page
			},
			error: (error) => {
				console.error("Order failed:", error);
			},
			complete: () => {
				console.log("Order process completed.");
			},
		});
	}
}
