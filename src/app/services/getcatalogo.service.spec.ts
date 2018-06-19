import { TestBed, inject } from '@angular/core/testing';

import { GetcatalogoService } from './getcatalogo.service';

describe('GetcatalogoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetcatalogoService]
    });
  });

  it('should be created', inject([GetcatalogoService], (service: GetcatalogoService) => {
    expect(service).toBeTruthy();
  }));
});
