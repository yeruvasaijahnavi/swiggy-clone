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
];
