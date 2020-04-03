import { TestBed } from '@angular/core/testing';

import { AppCommonService } from './app-common.service';

describe('AppCommonService', () => {
    let appCommonService: AppCommonService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AppCommonService],
        });
        appCommonService = TestBed.inject(AppCommonService);
    });

    describe('getAppCommon$', () => {
        it('should return Observable<AppCommon>', () => {
            appCommonService.getAppCommon$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
