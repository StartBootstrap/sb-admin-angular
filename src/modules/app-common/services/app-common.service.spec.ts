import { TestBed } from '@angular/core/testing';

import { AppCommonService } from './app-common.service';

describe('AppCommonService', () => {
    let templateService: AppCommonService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AppCommonService],
        });
        templateService = TestBed.get(AppCommonService);
    });

    describe('getAppCommon$', () => {
        it('should return Observable<AppCommon>', () => {
            templateService.getAppCommon$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
