import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RobotService {
  private apiUrl = 'http://localhost:8080/api/robot/move';

  constructor(private http: HttpClient) {}

  moveRobot(script: string): Observable<any> {
    const requestBody = { script: script };
    return this.http.post<any>(this.apiUrl, requestBody);
  }
}
