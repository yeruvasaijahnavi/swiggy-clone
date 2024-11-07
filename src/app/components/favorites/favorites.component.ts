import { Component, OnInit } from "@angular/core";
import { FavoritesService } from "../../services/favorites.service";
import { CommonModule } from "@angular/common";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
@Component({
	selector: "app-favorites",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./favorites.component.html",
	styleUrl: "./favorites.component.css",
})
export class FavoritesComponent {
	favorites: any[] = []; // Array to hold favorite foods
	isLoggedIn: boolean = false;

	constructor(
		private favoritesService: FavoritesService,
		private authService: AuthService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.isLoggedIn = this.authService.isLoggedIn();
		if (this.isLoggedIn) {
			this.favorites = this.favoritesService.getFavorites();
		} else {
			this.router.navigate(["/login"]);
		}
	}

	removeFromFavorites(item: any) {
		this.favoritesService.removeFavorite(item);
		this.favorites = this.favoritesService.getFavorites(); // refresh list
	}
}
