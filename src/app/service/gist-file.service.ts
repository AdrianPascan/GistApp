import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HttpConstants} from '../utils/http-utils';

@Injectable({
  providedIn: 'root'
})
export class GistFileService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getFileContent(url: string): Observable<string> {
    return this.httpClient.get(url, {responseType: HttpConstants.TEXT_RESPONSE_TYPE});
  }
}
