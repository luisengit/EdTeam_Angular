import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apod } from '../model/apod';
import { Observable } from 'rxjs/Observable';
import { MarsImage } from '../model/mars-image';

const APOD_URL = 'https://api.nasa.gov/planetary/apod';
const MARS_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000';
const API_KEY = 'fIQh4a7UyDfmzcvFF9xIVAcFVhhFU9yK4t7lNAZG';

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

  getMarsImages(camera): Observable<MarsImage> {
    return this.http.get<MarsImage>(`${MARS_URL}&camera=${camera}&api_key=${API_KEY}`);
  }

}
