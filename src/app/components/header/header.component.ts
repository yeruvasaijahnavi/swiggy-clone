import { Component, OnInit } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { Router, RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AuthService } from "../../services/auth.service"; // Import AuthService

@Component({
	selector: "app-header",
	standalone: true,
	imports: [RouterLink, CommonModule],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.css",
})
export class HeaderComponent implements OnInit {
	title = "Swiggy";
	totalItems: number = 0;

	constructor(
		private cartService: CartService,
		private authService: AuthService, // Inject AuthService
		private router: Router
	) {}

	ngOnInit(): void {
		this.cartService.itemCount$.subscribe((count) => {
			this.totalItems = count;
		});
	}

	// Method to check if the user is logged in
	isLoggedIn(): boolean {
		return this.authService.isLoggedIn();
	}

	// Method to log out
	logout() {
		this.authService.logout();
		this.router.navigate(["/login"]);
	}
}
