import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class PlannerService {

  private API_URL = environment.baseUrl

  private baseUrl = "http://localhost:8080"
  constructor(private httpClient : HttpClient) { }

  getAllPlanner() {
    return this.httpClient.get(`${this.baseUrl}/api/v1/planner`);
  }

  public savePlanner(planner : Form){
    return this.httpClient.post(`${this.baseUrl}/api/v1/planner`, planner)
  }

  public deletePlannerById(id : string) {
    return this.httpClient.delete(`${this.baseUrl}/api/v1/planner/${id}`)
  }


}
