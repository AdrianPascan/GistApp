import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Gist} from '../model/gist';
import {HttpClient, HttpParams} from '@angular/common/http';
import {HttpConstants} from '../utils/http-utils';
import {BaseGist} from '../model/base-gist';

@Injectable({
  providedIn: 'root'
})
export class GistService {

  static readonly BASE_URL = 'https://api.github.com';

  constructor(private httpClient: HttpClient) {
  }

  getGistsForUser(username: string): Observable<Gist[]> {
    return this.httpClient.get<Gist[]>(`${GistService.BASE_URL}/users/${username}/gists`);
  }

  getGistForks(gistId: string, forkCount: number): Observable<Gist[]> {
    const params = new HttpParams()
      .set(HttpConstants.PER_PAGE_PARAM, forkCount.toString());
    const options = {params};
    return this.httpClient.get<Gist[]>(`${GistService.BASE_URL}/gists/${gistId}/forks`, options);
  }

  getGist(gistId: string): Observable<BaseGist> {
    return this.httpClient.get<BaseGist>(`${GistService.BASE_URL}/gists/${gistId}`);
  }
}
