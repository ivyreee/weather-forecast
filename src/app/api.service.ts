import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  data = '';

  submit(input: string) {
    this.data = input
    this.router.navigate(['/weather'])
  }

  getData(): Observable<any> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.data}&APPID=${environment.WEATHER_API_KEY}`);
  }
}
