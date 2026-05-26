import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import {
  ZakatResult,
  ZakatMalRequest,
  ZakatGoldSilverRequest,
  ZakatTijarahRequest,
  ZakatZiraaRequest,
  ZakatMawashiRequest,
  ZakatFitrRequest
} from '../models/zakat.models';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ZakatService {
  private readonly apiUrl = environment.apiUrl;
  private readonly TIMEOUT_MS = 10_000; // 10s — avoids infinite spinner

  constructor(private http: HttpClient) {}

  calculateMal(req: ZakatMalRequest): Observable<ZakatResult> {
    return this.http.post<ZakatResult>(`${this.apiUrl}/mal`, req)
      .pipe(timeout(this.TIMEOUT_MS));
  }

  calculateGoldSilver(req: ZakatGoldSilverRequest): Observable<ZakatResult> {
    return this.http.post<ZakatResult>(`${this.apiUrl}/gold-silver`, req)
      .pipe(timeout(this.TIMEOUT_MS));
  }

  calculateTijarah(req: ZakatTijarahRequest): Observable<ZakatResult> {
    return this.http.post<ZakatResult>(`${this.apiUrl}/tijarah`, req)
      .pipe(timeout(this.TIMEOUT_MS));
  }

  calculateZiraa(req: ZakatZiraaRequest): Observable<ZakatResult> {
    return this.http.post<ZakatResult>(`${this.apiUrl}/ziraa`, req)
      .pipe(timeout(this.TIMEOUT_MS));
  }

  calculateMawashi(req: ZakatMawashiRequest): Observable<ZakatResult> {
    return this.http.post<ZakatResult>(`${this.apiUrl}/mawashi`, req)
      .pipe(timeout(this.TIMEOUT_MS));
  }

  calculateFitr(req: ZakatFitrRequest): Observable<ZakatResult> {
    return this.http.post<ZakatResult>(`${this.apiUrl}/fitr`, req)
      .pipe(timeout(this.TIMEOUT_MS));
  }
}
