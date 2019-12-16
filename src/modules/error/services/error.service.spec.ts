import { TestBed } from '@angular/core/testing';

import { ErrorService } from './error.service';

describe('ErrorService', () => {
    let templateService: ErrorService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ErrorService],
        });
        templateService = TestBed.get(ErrorService);
    });

    describe('getError$', () => {
        it('should return Observable<Error>', () => {
            templateService.getError$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
