import { Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		pathMatch: "full",
		loadComponent() {
			return import("./components/home/home.component").then(
				(m) => m.HomeComponent
			);
		},
	},
	{
		path: "favs",
		loadComponent() {
			return import("./components/favorites/favorites.component").then(
				(m) => m.FavoritesComponent
			);
		},
	},
	{
		path: "restaurant/:id",
		loadComponent() {
			return import(
				"./components/restaurant-menu/restaurant-menu.component"
			).then((m) => m.RestaurantMenuComponent);
		},
	},
	{
		path: "cart",
		loadComponent() {
			return import("./components/cart/cart.component").then(
				(m) => m.CartComponent
			);
		},
	},
];
