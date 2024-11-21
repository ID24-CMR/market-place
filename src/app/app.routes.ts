import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { CoreModule } from './core/core.module';

export const routes: Routes = [
	{path: '', redirectTo: '/home',pathMatch: 'full'},
	{path: 'home', component: HomeComponent}];
	
