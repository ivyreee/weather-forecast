import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  data = '';

  hello(input: string) {
    // console.log(this.data)
    this.data = input
    // this.getData().subscribe(response => {
    // })
    this.router.navigate(['/weather'])
  }

  getData(): Observable<any> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.data}&APPID=25b4a647977864c180ff95586a8919ae`);
  }
}
