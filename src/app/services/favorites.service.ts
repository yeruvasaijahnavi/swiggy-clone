import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class FavoritesService {
	private favorites: any[] = [];

	constructor() {
		this.loadFavorites();
	}

	loadFavorites() {
		const storedFavorites = localStorage.getItem("favorites");
		this.favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
	}

	getFavorites() {
		return this.favorites;
	}

	addFavorite(item: any) {
		this.favorites.push(item);
		this.saveFavorites();
	}

	removeFavorite(item: any) {
		this.favorites = this.favorites.filter((fav) => fav.id !== item.id);
		this.saveFavorites();
	}

	private saveFavorites() {
		localStorage.setItem("favorites", JSON.stringify(this.favorites));
	}
}
