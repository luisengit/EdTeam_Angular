import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apod } from '../model/apod';
import { Observable } from 'rxjs/Observable';

const APOD_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = '061Dofd1SPshiXeiBzP97LsGCmLFlSiRvk5aYgg9';

@Injectable()
export class NasaApiService {

  
  // Dependency Injection: HttpClient
  constructor( private http: HttpClient ) { }

  getApod(): Observable<Apod> {
    // return this.DATA;
    // return this.http.get<Apod>(APOD_URL + '?api_key=' + API_KEY);

    // Template literals
    return this.http.get<Apod>(`${APOD_URL}?api_key=${API_KEY}`);
  }

}
