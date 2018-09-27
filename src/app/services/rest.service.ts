import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
export interface Question {
  id?: string;
  feedbackId: string;
  comment?: string;
  rating: number;
  type?: string;
}
@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) {
  }
  get(id: any) {
    return this.http.get(environment.feedbackApi + '/api/feedback/questions/' + id);
  }
  post(response: Question) {
    return this.http.post(environment.feedbackApi + '/api/feedback/submit', response);
  }
}
