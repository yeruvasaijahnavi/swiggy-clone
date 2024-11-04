import { Component } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { CommonModule } from "@angular/common";
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

	constructor(private cartService: CartService) {}

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
}
