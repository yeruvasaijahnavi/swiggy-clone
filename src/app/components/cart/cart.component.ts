import { Component } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { CommonModule } from "@angular/common";
import { OrderService } from "../../services/order.service";
import { Router } from "@angular/router";
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
		private router: Router
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
		if (this.cartItems.length === 0) {
			alert("Your cart is empty!");
			return;
		}

		this.orderService.placeOrder(this.cartItems).subscribe({
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
