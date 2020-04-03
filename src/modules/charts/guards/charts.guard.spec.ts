import { TestBed } from '@angular/core/testing';

import { ChartsGuard } from './charts.guard';

describe('Charts Guards', () => {
    let chartsGuard: ChartsGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [ChartsGuard],
        });
        chartsGuard = TestBed.inject(ChartsGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            chartsGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });
});
