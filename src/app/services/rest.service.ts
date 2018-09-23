import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Question {
  id: any;
  title: string;
  rating?: number;
}
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  get(id: any) {
    return this.http.get('/api/questions/' + id);
  }
  post(response: Question) {
    return this.http.post('/api/questions', response);
  }
}
