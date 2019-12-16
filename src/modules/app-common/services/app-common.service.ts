import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AppCommonService {
    constructor() {}

    getAppCommon$(): Observable<{}> {
        return of({});
    }

}
