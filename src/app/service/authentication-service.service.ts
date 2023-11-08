import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private httpClient: HttpClient) { }

  private API_URL = environment.baseUrl

  private baseUrl = "http://localhost:8080"

  public login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get(`${this.baseUrl}/api/v1/auth`, { headers, responseType: 'text' as 'json' });
  }

  loggedInUsername: string;


}
