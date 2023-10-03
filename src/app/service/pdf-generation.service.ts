import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PdfGenerationService {

  constructor(private httpClient: HttpClient) { }


  private API_URL = environment.baseUrl

  private baseUrl = "http://localhost:8080"

  public generatePdf(id: string) {
    return this.httpClient.get(`${this.baseUrl}/api/v1/generate/view/${id}`);
  }

  public viewPdf(id: string){
    const url = this.baseUrl +"/api/v1/generate/view/" + id;
    return this.httpClient.get(url, { responseType: 'blob' });
  }

}
