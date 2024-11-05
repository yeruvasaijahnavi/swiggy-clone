import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";
import { provideHttpClient } from "@angular/common/http"; // Import HttpClient module

// Update appConfig to include provideHttpClient
const updatedAppConfig = {
	...appConfig,
	providers: [
		...(appConfig.providers || []),
		provideHttpClient(), // Add HttpClient provider here
	],
};

bootstrapApplication(AppComponent, updatedAppConfig).catch((err) =>
	console.error(err)
);
