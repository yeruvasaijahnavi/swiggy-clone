import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

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
	private itemCountSubject = new BehaviorSubject<number>(0);
	itemCount$ = this.itemCountSubject.asObservable();

	addToCart(item: CartItem) {
		const existingItem = this.cart.find(
			(cartItem) => cartItem.id === item.id
		);
		if (existingItem) {
			// If item already exists, add to quantity
			existingItem.quantity += item.quantity;
		} else {
			// Otherwise, add the item to the cart
			this.cart.push(item);
		}
		this.updateCartCount();
	}

	removeFromCart(itemId: number) {
		this.cart = this.cart.filter((cartItem) => cartItem.id !== itemId);
		this.updateCartCount();
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

	updateCartCount() {
		const itemCount = this.cart.reduce(
			(count, item) => count + item.quantity,
			0
		);
		this.itemCountSubject.next(itemCount);
	}
}
