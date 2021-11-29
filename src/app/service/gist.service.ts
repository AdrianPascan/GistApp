import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Gist} from '../model/gist';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GistService {

  static readonly BASE_URL = 'https://api.github.com';

  constructor(private httpClient: HttpClient) { }

  getGistsForUser(username: string): Observable<Gist[]> {
    return this.httpClient.get<Gist[]>(`${GistService.BASE_URL}/users/${username}/gists`);
  }
}
