import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ErrorService {
    constructor() {}

    getError$(): Observable<{}> {
        return of({});
    }
}
