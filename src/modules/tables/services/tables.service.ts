import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class TablesService {
    constructor() {}

    getTables$(): Observable<{}> {
        return of({});
    }
}
