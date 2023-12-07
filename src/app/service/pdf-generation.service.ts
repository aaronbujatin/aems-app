import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PdfGenerationService {

  constructor(private httpClient: HttpClient) { }


  private API_URL = environment.baseUrl

  private LOCAL_API = "http://localhost:8080"

  public generatePdf(id: string) {
    return this.httpClient.get(`${this.LOCAL_API}/api/v1/generate/view/${id}`);
  }

  // public viewPdf(id: string){
  //   const url = this.LOCAL_API +"/api/v1/generate/view/" + id;
  //   return this.httpClient.get(url, { responseType: 'blob' });
  // }

}
