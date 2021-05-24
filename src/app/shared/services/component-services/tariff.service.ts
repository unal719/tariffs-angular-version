import { HttpClient } from '@angular/common/http';
import { DataService } from './../data.service';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Tariff } from '../../models/tariff.model';
@Injectable({
  providedIn: 'root',
})
export class TariffService extends DataService {
  loadTariffsEndPoint: string = 'tariffs';
  constructor(http: HttpClient) {
    super(http);
  }

  loadTariffs(): Observable<Tariff[]> {
    return this.GetAll<Tariff[]>(this.loadTariffsEndPoint).pipe(
      tap((response: Tariff[]) => {
        return response;
      }),
      catchError((val: any) => {
        return throwError(val);
      })
    );
  }
}
