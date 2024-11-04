// src/app/services/auth.service.ts
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

interface User {
	id: number;
	username: string;
	password: string;
}

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private apiUrl = "https://mockapi.io/users"; // Replace with your mock API URL
	private currentUser: User | null = null;

	constructor(private http: HttpClient) {}

	login(username: string, password: string): Observable<User> {
		return this.http.post<User>(`${this.apiUrl}/login`, {
			username,
			password,
		});
	}

	logout() {
		this.currentUser = null;
		localStorage.removeItem("currentUser");
	}

	getCurrentUser(): User | null {
		return this.currentUser;
	}

	setCurrentUser(user: User) {
		this.currentUser = user;
		localStorage.setItem("currentUser", JSON.stringify(user));
	}

	isAuthenticated(): boolean {
		return !!this.currentUser;
	}
}
