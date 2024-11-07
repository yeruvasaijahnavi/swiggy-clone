// src/app/components/login/login.component.ts
import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
	standalone: true,
	imports: [FormsModule, CommonModule, RouterLink],
})
export class LoginComponent {
	email = "";
	password = "";
	loginError = false;

	constructor(private authService: AuthService, private router: Router) {}

	onLogin() {
		this.authService
			.login(this.email, this.password)
			.subscribe((success) => {
				if (success) {
					this.router.navigate(["/"]); // Redirect to home page or a specific component
				} else {
					this.loginError = true;
				}
			});
	}
}
