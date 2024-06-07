import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  countValue = `${environment.apiDomain}UsGrants/GetCountValue?date=2024-05-28`;

  constructor(private http: HttpClient) {}
  getCountRecords() {
    return this.http.get(this.countValue);
  }
}
