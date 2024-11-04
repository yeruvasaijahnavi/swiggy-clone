// home.component.ts
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FavoritesService } from "../../services/favorites.service";
import { RouterLink } from "@angular/router";
import { DataService } from "../../services/data.service";

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
export class HomeComponent implements OnInit {
	restaurants: Restaurant[] = [];
	searchTerm: string = "";
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

	constructor(
		private favoritesService: FavoritesService,
		private dataService: DataService
	) {}

	ngOnInit(): void {
		// Fetch restaurants only once
		this.restaurants = this.dataService.getRestaurants();
	}

	get filteredRestaurants() {
		// Use a local variable to filter instead of assigning to restaurants
		return this.searchTerm
			? this.restaurants.filter((restaurant) =>
					restaurant.name
						.toLowerCase()
						.includes(this.searchTerm.toLowerCase())
			  )
			: this.restaurants;
	}

	get filteredCuisines() {
		return this.cuisines.filter((cuisine) =>
			cuisine.name.toLowerCase().includes(this.searchTerm.toLowerCase())
		);
	}

	addToFavorites(restaurant: Restaurant) {
		this.favoritesService.addFavorite(restaurant);
		alert(`${restaurant.name} has been added to favorites!`);
	}
}
