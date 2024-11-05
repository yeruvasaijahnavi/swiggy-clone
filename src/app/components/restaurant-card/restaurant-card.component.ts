import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
	selector: "app-restaurant-card",
	standalone: true,
	templateUrl: "./restaurant-card.component.html",
	styleUrls: ["./restaurant-card.component.css"],
	imports: [RouterLink],
})
export class RestaurantCardComponent {
	@Input() id!: number;
	@Input() name!: string;
	@Input() cuisine!: string;
	@Input() location!: string;
	@Input() imageUrl!: string;
	@Output() addToFavorites: EventEmitter<void> = new EventEmitter<void>();

	onAddToFavorites() {
		this.addToFavorites.emit();
	}
}
