import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {
    constructor() {}

    getAuth$(): Observable<{}> {
        return of({});
    }
}
