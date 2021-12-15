import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ResourceModel } from '../model/resource.model';

@Injectable({
  providedIn: 'root',
})
export abstract class ResourceService<T extends ResourceModel<T>> {
  constructor(private httpClient: HttpClient, protected apiUrl: String) {}
  public create(resource: Partial<T>): Observable<T> {
    return this.httpClient
      .post<T>(`${this.apiUrl}`, resource)
      .pipe(map((result) => result));
  }
  public get(): Observable<T[]> {
    return this.httpClient
      .get<T[]>(`${this.apiUrl}`)
      .pipe(map((result) => result));
  }
  public getById(id: number): Observable<T> {
    return this.httpClient
      .get<T>(`${this.apiUrl}/${id}`)
      .pipe(map((result) => result));
  }
  public update(resource: Partial<T> & { toJson: () => T }): Observable<T> {
    return this.httpClient
      .put<T>(`${this.apiUrl}/${resource.id}`, resource.toJson())
      .pipe(map((result) => result));
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
