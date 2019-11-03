import { TestBed } from '@angular/core/testing';

import { CreatePopupService } from './create-popup.service';

describe('CreatePopupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatePopupService = TestBed.get(CreatePopupService);
    expect(service).toBeTruthy();
  });
});
