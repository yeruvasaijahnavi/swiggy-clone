import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class CartService {
	private cartItems: any[] = [];
	constructor() {}

	addToCart(item: any) {
		this.cartItems.push(item);
	}

	removeFromCart(item: any) {
		this.cartItems = this.cartItems.filter(
			(cartItem) => cartItem.id !== item.id
		);
	}

	getCartItems() {
		return this.cartItems;
	}

	calculateTotalPrice() {
		return this.cartItems.reduce((total, item) => total + item.price, 0);
	}
}
