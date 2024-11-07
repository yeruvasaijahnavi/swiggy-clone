// src/app/components/orders/orders.component.ts
import { Component, OnInit } from "@angular/core";
import { OrderService } from "../../services/order.service";
import { CommonModule } from "@angular/common";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-orders",
	templateUrl: "./orders.component.html",
	styleUrls: ["./orders.component.css"],
	imports: [CommonModule],
	standalone: true,
})
export class OrdersComponent implements OnInit {
	orders: any[] = [];

	constructor(
		private orderService: OrderService,
		private authService: AuthService,
		private router: Router
	) {}

	ngOnInit() {
		if (!this.authService.isLoggedIn()) {
			alert("You need to login first before you can view orders.");
			this.router.navigate(["/login"]);
		}
		this.orderService.getOrders().subscribe({
			next: (data) => {
				this.orders = data;
			},
			error: (error) => {
				console.error("Failed to load orders:", error);
			},
			complete: () => {
				console.log("Order loading completed.");
			},
		});
	}
}
