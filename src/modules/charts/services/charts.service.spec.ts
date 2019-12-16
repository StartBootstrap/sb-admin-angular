import { TestBed } from '@angular/core/testing';

import { ChartsService } from './charts.service';

describe('ChartsService', () => {
    let templateService: ChartsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ChartsService],
        });
        templateService = TestBed.get(ChartsService);
    });

    describe('getCharts$', () => {
        it('should return Observable<Charts>', () => {
            templateService.getCharts$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
