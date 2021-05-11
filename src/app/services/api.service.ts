import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ILogData } from '../types';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getLogForRequest(requestPath): Observable<ILogData> {
    return this.http.get(environment.stageApiUrl + requestPath, { observe: 'response' }).pipe(map(response => { const logData: ILogData = (response as any).body; return logData }))
  }
  refreshLogList() {
    return Object.keys(localStorage).map(e => {
      if (e.startsWith('log-')) {
        return { key: e, data: JSON.parse(localStorage.getItem(e)) }
      }
    })
  }

}
