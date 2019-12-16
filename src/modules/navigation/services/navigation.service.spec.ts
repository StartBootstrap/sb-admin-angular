import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivatedRouteStub, RouterStub } from '@testing/stubs';

import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
    let templateService: NavigationService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                NavigationService,
                { provide: ActivatedRoute, useValue: ActivatedRouteStub },
                { provide: Router, useValue: new RouterStub() },
            ],
        });
        templateService = TestBed.get(NavigationService);
    });

    describe('sideNavVisible$', () => {
        it('should return Observable<boolean>', () => {
            templateService.sideNavVisible$().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });
});
