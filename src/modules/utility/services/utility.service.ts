import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UtilityService {
    constructor(private http: HttpClient) {}

    get version$(): Observable<string> {
        return this.http.get('/assets/version', { responseType: 'text' });
    }
}
