import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { AppModule } from '../app.module';
import { HttpService } from './http/http.service';

describe('App HttpClient', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [provideHttpClientTesting()]
    });
  });

  it('is HttpService, so API calls get the Fineract prefix', () => {
    const http = TestBed.inject(HttpClient);
    expect(http instanceof HttpService).toBe(true);

    const httpMock = TestBed.inject(HttpTestingController);
    http.post('/authentication', {}).subscribe();
    const request = httpMock.expectOne((req) => req.url.endsWith('/fineract-provider/api/v1/authentication'));
    request.flush({});
    httpMock.verify();
  });
});
