import { TestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
    let templateService: DashboardService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DashboardService],
        });
        templateService = TestBed.get(DashboardService);
    });

    describe('getDashboard$', () => {
        it('should return Observable<Dashboard>', () => {
            templateService.getDashboard$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
