import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpConstants} from '../utils/http-utils';

@Injectable({
  providedIn: 'root'
})
export class GistFileService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getFileContent(url: string): Observable<string> {
    const headers = new HttpHeaders()
      .set(HttpConstants.CONTENT_TYPE, HttpConstants.TEXT_CONTENT_TYPE);
    return this.httpClient.get<string>(url, {headers});
  }
}
