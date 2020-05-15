import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FirebaseAppConfig } from '@angular/fire';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Config1Resolver implements Resolve<FirebaseAppConfig> {
  constructor(private readonly httpClient: HttpClient) {
  }

  resolve(): Observable<FirebaseAppConfig> {
    return this.httpClient.get<FirebaseAppConfig>('assets/config2.json');
  }
}
