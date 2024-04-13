import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
    { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'home', component: HomeComponent },
    { path: 'weather', component: WeatherComponent }
];
