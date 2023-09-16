import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlannerService {

  private API_URL = environment.baseUrl


  constructor(private httpClient : HttpClient) { }

  getAllPlanner() {
    return this.httpClient.get(`${this.API_URL}/api/v1/planner`);
  }

  public savePlanner(planner){
    return this.httpClient.post(`${this.API_URL}/api/v1/planner`, planner)
  }


}
