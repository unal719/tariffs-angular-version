import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DataService {
  private apiUrl: string;
  private sessionId: string;
  loadComponentForHoldingUser = new Subject<boolean>();
  constructor(private httpClientService: HttpClient) {
    this.setApiUrl();
  }

  /**
   *set base url from environment
   */
  setApiUrl() {
    this.apiUrl = environment.baseUrl;
  }

  GetAll<T>(endPointUrl: string = ''): Observable<T> {
    return this.httpClientService.get<T>(this.apiUrl + endPointUrl);
  }

  Get<T>(Id, endPointUrl: string = ''): Observable<T> {
    return this.httpClientService.get<T>(this.apiUrl + endPointUrl + '/' + Id);
  }

  Create<T>(resource, endPointUrl: string = ''): Observable<T> {
    return this.httpClientService.post<T>(
      this.apiUrl + endPointUrl,
      JSON.stringify(resource)
    );
  }

  Update<T>(resource, endPointUrl: string = ''): Observable<T> {
    return this.httpClientService.put<T>(
      this.apiUrl + endPointUrl,
      JSON.stringify(resource)
    );
  }

  Delete<T>(Id, endPointUrl: string = ''): Observable<any> {
    return this.httpClientService.delete<T>(
      this.apiUrl + endPointUrl + '/' + Id
    );
  }
}
