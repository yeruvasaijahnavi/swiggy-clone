// src/app/components/signup/signup.component.ts
import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-signup",
	templateUrl: "./signup.component.html",
	styleUrls: ["./signup.component.css"],
	standalone: true,
	imports: [FormsModule, CommonModule, RouterLink],
})
export class SignupComponent {
	name = "";
	email = "";
	password = "";
	signupError = false;

	constructor(private authService: AuthService, private router: Router) {}

	onSignup() {
		this.authService.signup(this.name, this.email, this.password).subscribe(
			(success) => {
				if (success) {
					this.router.navigate(["/login"]); // Redirect to login page upon successful signup
				} else {
					this.signupError = true; // Display error message if signup fails
				}
			},
			(error) => {
				console.error("Signup error:", error);
				this.signupError = true; // Handle any server errors during signup
			}
		);
	}
}
