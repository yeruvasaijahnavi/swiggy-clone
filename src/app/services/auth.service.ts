// src/app/services/auth.service.ts
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private isAuthenticated = false;
	private apiUrl = "https://6729a2e76d5fa4901b6dc28a.mockapi.io/api/v1/users";

	constructor(private http: HttpClient) {}

	signup(name: string, email: string, password: string): Observable<boolean> {
		const newUser = { name, email, password };
		return this.http.post<any>(this.apiUrl, newUser).pipe(
			map((response) => {
				// If signup is successful, return true
				if (response) {
					return true;
				} else {
					return false;
				}
			}),
			catchError(() => of(false))
		);
	}

	login(username: string, password: string): Observable<boolean> {
		return this.http
			.get<any[]>(`${this.apiUrl}?email=${username}&password=${password}`)
			.pipe(
				map((users) => {
					if (users.length) {
						// User authenticated successfully
						this.isAuthenticated = true;
						localStorage.setItem("user", JSON.stringify(users[0]));
						return true;
					} else {
						// Authentication failed
						return false;
					}
				}),
				catchError(() => of(false))
			);
	}

	logout() {
		this.isAuthenticated = false;
		localStorage.removeItem("user");
	}

	isLoggedIn(): boolean {
		return this.isAuthenticated || !!localStorage.getItem("user");
	}
}
