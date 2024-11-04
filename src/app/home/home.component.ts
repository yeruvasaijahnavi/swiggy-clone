// home.component.ts
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
	selector: "app-home",
	standalone: true,
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
	imports: [CommonModule],
})
export class HomeComponent {
	featuredRestaurants = [
		{
			name: "Restaurant A",
			cuisine: "Italian",
			location: "Location A",
			rating: 4.5,
			imageUrl: "https://via.placeholder.com/150",
		},
		{
			name: "Restaurant B",
			cuisine: "Indian",
			location: "Location B",
			rating: 4.0,
			imageUrl: "https://via.placeholder.com/150",
		},
		// Add more restaurants as needed
	];

	popularCuisines = [
		{ name: "Italian", imageUrl: "https://via.placeholder.com/100" },
		{ name: "Indian", imageUrl: "https://via.placeholder.com/100" },
		// Add more cuisines as needed
	];
}
