import { Component, OnInit } from "@angular/core";
import { FavoritesService } from "../../services/favorites.service";
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

	constructor(private favoritesService: FavoritesService) {}

	ngOnInit(): void {
		this.favorites = this.favoritesService.getFavorites();
	}

	removeFromFavorites(item: any) {
		this.favoritesService.removeFavorite(item);
		this.favorites = this.favoritesService.getFavorites(); // refresh list
	}
}
