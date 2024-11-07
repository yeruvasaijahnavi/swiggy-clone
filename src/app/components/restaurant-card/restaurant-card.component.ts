import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
	selector: "app-restaurant-card",
	standalone: true,
	templateUrl: "./restaurant-card.component.html",
	styleUrls: ["./restaurant-card.component.css"],
	imports: [RouterLink, CommonModule],
})
export class RestaurantCardComponent {
	@Input() id!: number;
	@Input() name!: string;
	@Input() cuisine!: string;
	@Input() location!: string;
	@Input() imageUrl!: string;
	@Input() duration!: string;
	@Input() rating!: number;
	@Output() addToFavorites: EventEmitter<void> = new EventEmitter<void>();

	constructor(private router: Router, private authService: AuthService) {}

	onLinkClick(event: MouseEvent): void {
		const isFavoriteButtonClicked = (event.target as HTMLElement).closest(
			"button"
		);

		if (!isFavoriteButtonClicked) {
			// Prevent navigation when clicking on the favorite button
			this.router.navigate([`/restaurant/${this.id}`]);
		}

		event.preventDefault(); // Prevent the default anchor link behavior
	}

	onAddToFavorites() {
		if (this.authService.isLoggedIn()) {
			this.addToFavorites.emit();
		} else {
			this.router.navigate(["/login"]);
		}
	}
}
