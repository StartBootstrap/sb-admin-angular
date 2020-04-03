import { TestBed } from '@angular/core/testing';

import { TablesService } from './tables.service';

describe('TablesService', () => {
    let tablesService: TablesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TablesService],
        });
        tablesService = TestBed.inject(TablesService);
    });

    describe('getTables$', () => {
        it('should return Observable<Tables>', () => {
            tablesService.getTables$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
