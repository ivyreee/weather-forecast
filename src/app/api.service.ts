import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=25b4a647977864c180ff95586a8919ae');
  }
}
