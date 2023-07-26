import { TestBed } from '@angular/core/testing';

import { FirebaseStorageServiceService } from './firebase-storage-service.service';

describe('FirebaseStorageServiceService', () => {
  let service: FirebaseStorageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseStorageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
