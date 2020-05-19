import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

interface GeoCode {
  place_id: string;
  licence: string;
  osm_type: string;
  boundingbox: string[];
  lat: string;
  lon: string;
  display_name: string;
  class: string;
  type: string;
  importance: number;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class GeoCodingService {
  constructor(private http: HttpClient) {}

  getCoordinates(address: string) {
    const apiLink = `https://eu1.locationiq.com/v1/search.php?key=${environment.geocodingKey}&q=${address}&format=json`;
    return this.http
      .get(apiLink)
      .pipe(
        map((res: GeoCode[]) => of({ latitude: res[0].lat, longitude: res[0].lon }))
      );
  }
}
