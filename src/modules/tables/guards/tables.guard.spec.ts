import { TestBed } from '@angular/core/testing';

import { TablesGuard } from './tables.guard';

describe('Tables Guards', () => {
    let tablesGuard: TablesGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [TablesGuard],
        });
        tablesGuard = TestBed.inject(TablesGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            tablesGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });
});
