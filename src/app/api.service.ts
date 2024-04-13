import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, mergeMap, of, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  SW_API = 'https://swapi.dev/api'

  constructor(private http: HttpClient) { }

  getDataCompleteObject() {
    return this.http.get(`${this.SW_API}/people/2`);
  }

  getData() {
    return this.http.get(`${this.SW_API}/people/2`).pipe(
      map((res: any) => ({
        nombre: res.name,
        altura: `${res.height} cm`,
        ojos: (res.eye_color as String).toUpperCase(),
      }))
    );
  }

  getAllData() {
    return this.http.get(`${this.SW_API}/people/2`).pipe(
      mergeMap((res: any) => zip(of(res), this.http.get(res.species[0]), this.http.get(res.films[0]))),
      map(([personaje, specie, movie]: any[]) => ({
        nombre_mio: personaje.name,
        altura_mio: `${personaje.height} cm`,
        ojos_mio: (personaje.eye_color as String).toUpperCase(),
        specie_mio: specie.name,
        movie_name_mio: movie.title,
      }))
    );
  }

}
