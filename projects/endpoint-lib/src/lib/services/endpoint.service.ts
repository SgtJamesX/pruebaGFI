import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const ENDPOINT_ROUTE = './assets/endpoints/endpoints.json';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  endpoints;

  constructor(private http: HttpClient) {
  }

  /**
   * Init the endpointService, wait until the endpoint promise is resolved
   */
  async init() {
    await this.getJSON().then(data => {
      this.endpoints = data;
    });
  }
  /**
   * Read the Endpoints Json
   */
  async getJSON(): Promise<any> {
    return await this.http.get(ENDPOINT_ROUTE).toPromise();
  }

  /**
   * Get an specific Key from json endpoints
   */
  getRoute(key: string) {
    return this.endpoints[key];
  }

}
