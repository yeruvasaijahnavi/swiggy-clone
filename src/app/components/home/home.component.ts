// home.component.ts
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FavoritesService } from "../../services/favorites.service";
import { RouterLink } from "@angular/router";

interface Restaurant {
	id: number;
	name: string;
	cuisine: string;
	location: string;
	imageUrl: string;
}

@Component({
	selector: "app-home",
	standalone: true,
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
	imports: [CommonModule, FormsModule, RouterLink],
})
export class HomeComponent {
	constructor(private favoritesService: FavoritesService) {}
	restaurants: Restaurant[] = [
		{
			id: 1,
			name: "Restaurant A",
			cuisine: "Italian",
			location: "Location A",
			imageUrl: "https://via.placeholder.com/150",
		},
		{
			id: 2,
			name: "Restaurant B",
			cuisine: "Chinese",
			location: "Location B",
			imageUrl: "https://via.placeholder.com/150",
		},
		{
			id: 3,
			name: "Restaurant C",
			cuisine: "Indian",
			location: "Location C",
			imageUrl: "https://via.placeholder.com/150",
		},
	];

	cuisines: { name: string; imageUrl: string }[] = [
		{
			name: "Italian",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			name: "Chinese",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			name: "Indian",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			name: "Mexican",
			imageUrl: "https://via.placeholder.com/100",
		},
	];

	searchTerm: string = "";

	get filteredRestaurants() {
		return this.restaurants.filter((restaurant) =>
			restaurant.name
				.toLowerCase()
				.includes(this.searchTerm.toLowerCase())
		);
	}

	get filteredCuisines() {
		return this.cuisines.filter((cuisine) =>
			cuisine.name.toLowerCase().includes(this.searchTerm.toLowerCase())
		);
	}

	addToFavorites(restaurant: any) {
		this.favoritesService.addFavorite(restaurant);
		alert(`${restaurant.name} has been added to favorites!`);
	}
}
