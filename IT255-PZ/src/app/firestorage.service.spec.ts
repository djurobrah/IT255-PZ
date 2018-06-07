import { TestBed, inject } from '@angular/core/testing';

import { FirestorageService } from './firestorage.service';

describe('FirestorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirestorageService]
    });
  });

  it('should be created', inject([FirestorageService], (service: FirestorageService) => {
    expect(service).toBeTruthy();
  }));
});
