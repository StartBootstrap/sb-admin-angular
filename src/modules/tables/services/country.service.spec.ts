import { DecimalPipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { CountryService } from './country.service';

describe('CountryService', () => {
    let templateService: CountryService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CountryService, DecimalPipe],
        });
        templateService = TestBed.get(CountryService);
    });

    describe('countries$', () => {
        it('should return Observable<Country[]>', () => {
            templateService.countries$.subscribe(response => {
                expect(response).toBeDefined();
            });
        });
    });
});
