import { Routes } from '@angular/router';

import { HomeComponent } from './core/components/home/home.component';

export const routes: Routes = [

	{ path: '', redirectTo: 'home', pathMatch: 'full'},
	{ path: 'home', title: 'App Home Page', component: HomeComponent}];
	
