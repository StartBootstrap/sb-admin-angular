import { TestBed } from '@angular/core/testing';

import { NavigationGuard } from './navigation.guard';

describe('Navigation Guards', () => {
    let navigationGuard: NavigationGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [NavigationGuard],
        });
        navigationGuard = TestBed.get(NavigationGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            navigationGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });
});
