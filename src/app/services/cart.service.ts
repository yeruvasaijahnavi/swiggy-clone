import { Injectable } from "@angular/core";

interface CartItem {
	id: number;
	name: string;
	price: number;
	quantity: number;
}

@Injectable({
	providedIn: "root",
})
export class CartService {
	private cart: CartItem[] = [];

	addToCart(item: CartItem) {
		const existingItem = this.cart.find(
			(cartItem) => cartItem.id === item.id
		);
		if (existingItem) {
			existingItem.quantity += item.quantity;
		} else {
			this.cart.push(item);
		}
	}

	removeFromCart(itemId: number) {
		this.cart = this.cart.filter((cartItem) => cartItem.id !== itemId);
	}

	getCartItems(): CartItem[] {
		return this.cart;
	}

	getTotalPrice(): number {
		return this.cart.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	}
}
