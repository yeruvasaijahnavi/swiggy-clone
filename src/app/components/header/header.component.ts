import { Component, OnInit } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [RouterLink, CommonModule],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.css",
})
export class HeaderComponent {
	title = "Swiggy";
	totalItems: number = 0;
	constructor(private cartService: CartService) {}
	ngOnInit(): void {
		this.cartService.itemCount$.subscribe((count) => {
			this.totalItems = count;
		});
	}
}
