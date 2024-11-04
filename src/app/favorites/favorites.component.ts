import { Component } from "@angular/core";
import { FavoritesService } from "../favorites.service";
import { CommonModule } from "@angular/common";
@Component({
	selector: "app-favorites",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./favorites.component.html",
	styleUrl: "./favorites.component.css",
})
export class FavoritesComponent {
	favorites: any[] = []; // Array to hold favorite foods

	constructor(private favoritesService: FavoritesService) {
		this.loadFavorites();
	}

	// Method to load favorites from localStorage
	loadFavorites() {
		this.favorites = this.favoritesService.getFavorites();
	}

	removeFromFavorites(item: any) {
		this.favoritesService.removeFavorite(item);
		this.loadFavorites(); // Refresh the favorites list
	}
}
