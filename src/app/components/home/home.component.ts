// home.component.ts
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FavoritesService } from "../../services/favorites.service";
import { RouterLink } from "@angular/router";
import { DataService } from "../../services/data.service";
import { RestaurantCardComponent } from "../restaurant-card/restaurant-card.component";
import { Restaurant, MenuItem } from "../../services/data.service";
@Component({
	selector: "app-home",
	standalone: true,
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
	imports: [CommonModule, FormsModule, RouterLink, RestaurantCardComponent],
})
export class HomeComponent implements OnInit {
	restaurants: Restaurant[] = [];
	menuItems: MenuItem[] = [];
	searchTerm: string = "";
	cuisines: { name: string; imageUrl: string }[] = [
		{
			name: "Pizza",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			name: "Noodles",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			name: "Biryani",
			imageUrl: "https://via.placeholder.com/100",
		},
		{
			name: "Tacos",
			imageUrl: "https://via.placeholder.com/100",
		},
	];

	constructor(
		private favoritesService: FavoritesService,
		private dataService: DataService
	) {}

	ngOnInit(): void {
		this.restaurants = this.dataService.getRestaurants();
		this.menuItems = this.dataService.getMenuItems(); // Corrected this line
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
		return this.searchTerm
			? this.menuItems.filter((menuItem) =>
					menuItem.name
						.toLowerCase()
						.includes(this.searchTerm.toLowerCase())
			  )
			: this.menuItems;
	}

	addToFavorites(restaurant: Restaurant) {
		this.favoritesService.addFavorite(restaurant);
		alert(`${restaurant.name} has been added to favorites!`);
	}
}
