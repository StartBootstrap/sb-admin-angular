import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const _expand$ = new Subject<string[]>();

const expandedTable: {
    [index: string]: boolean;
} = {};

@Injectable()
export class SideNavService {
    constructor() {}

    get expand$() {
        return _expand$;
    }

    isExpanded(hash: string): boolean {
        if (expandedTable[hash]) {
            return true;
        }
        return false;
    }

    setExpanded(hash: string, expanded: boolean) {
        expandedTable[hash] = expanded;
    }
}
