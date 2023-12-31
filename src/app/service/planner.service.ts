import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class PlannerService {

  private API_URL = environment.baseUrl

  private LOCAL_API = "http://localhost:8080"
  constructor(private httpClient : HttpClient) { }

  getPlannerByOrganizerName(organizerName : string) {
    return this.httpClient.get(`${this.LOCAL_API}/api/v1/planner/organizer/${organizerName}`);
  }

  public savePlanner(planner : Form){
    return this.httpClient.post(`${this.LOCAL_API}/api/v1/planner`, planner)
  }

  public deletePlannerById(id : string) {
    return this.httpClient.delete(`${this.LOCAL_API}/api/v1/planner/${id}`)
  }


}
