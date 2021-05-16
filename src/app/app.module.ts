import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { MockModule } from './mock/mock.module';

let extraModules = environment.mockApi ? [MockModule] : [];

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		...extraModules
	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
