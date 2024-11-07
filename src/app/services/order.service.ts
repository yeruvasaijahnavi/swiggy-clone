// src/app/services/order.service.ts
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class OrderService {
	private orderApiUrl =
		"https://6729a2e76d5fa4901b6dc28a.mockapi.io/api/v1/orders";

	constructor(private http: HttpClient) {}

	placeOrder(orderData: {
		items: any[];
		totalCost: number;
	}): Observable<any> {
		// Add the date property to the passed orderData
		const orderWithDate = { ...orderData, date: new Date().toISOString() };

		// Make the HTTP POST request with the modified order data
		return this.http.post(this.orderApiUrl, orderWithDate);
	}

	getOrders(): Observable<any[]> {
		return this.http.get<any[]>(this.orderApiUrl);
	}
}
