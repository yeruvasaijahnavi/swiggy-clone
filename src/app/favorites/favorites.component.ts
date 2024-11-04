import { Component } from "@angular/core";

@Component({
	selector: "app-favorites",
	standalone: true,
	imports: [],
	templateUrl: "./favorites.component.html",
	styleUrl: "./favorites.component.css",
})
export class FavoritesComponent {
	favorites: any[] = []; // Array to hold favorite foods

	constructor() {
		this.loadFavorites();
	}

	// Method to load favorites from localStorage
	loadFavorites() {
		const storedFavorites = localStorage.getItem("favorites");
		this.favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
	}
}
