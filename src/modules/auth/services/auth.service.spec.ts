import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
    let templateService: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthService],
        });
        templateService = TestBed.get(AuthService);
    });

    describe('getAuth$', () => {
        it('should return Observable<Auth>', () => {
            templateService.getAuth$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
