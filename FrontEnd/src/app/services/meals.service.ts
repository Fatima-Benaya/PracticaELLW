import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  private BASE = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  search(name: string): Observable<any> {
    return this.http.get(`${this.BASE}/search.php?s=${encodeURIComponent(name)}`);
  }

  random(): Observable<any> {
    return this.http.get(`${this.BASE}/random.php`);
  }

  lookup(id: string): Observable<any> {
    return this.http.get(`${this.BASE}/lookup.php?i=${encodeURIComponent(id)}`);
  }
}
