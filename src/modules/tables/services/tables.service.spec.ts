import { TestBed } from '@angular/core/testing';

import { TablesService } from './tables.service';

describe('TablesService', () => {
    let templateService: TablesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TablesService],
        });
        templateService = TestBed.get(TablesService);
    });

    describe('getTables$', () => {
        it('should return Observable<Tables>', () => {
            templateService.getTables$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
