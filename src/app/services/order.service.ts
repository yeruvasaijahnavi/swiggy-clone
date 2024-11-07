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

	placeOrder(orderItems: any[]): Observable<any> {
		const orderData = { items: orderItems, date: new Date().toISOString() };
		return this.http.post(this.orderApiUrl, orderData);
	}

	getOrders(): Observable<any[]> {
		return this.http.get<any[]>(this.orderApiUrl);
	}
}
