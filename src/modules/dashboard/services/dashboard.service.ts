import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class DashboardService {
    constructor() {}

    getDashboard$(): Observable<{}> {
        return of({});
    }
}
