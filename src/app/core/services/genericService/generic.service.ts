import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { SERVICE_CONFIG } from './config/service-config';


@Injectable({
  providedIn: 'root'
})
export class GenericService<TModel> {
  private http = inject(HttpClient);
  protected readonly config = inject( SERVICE_CONFIG );
  protected readonly baseUrl: string = environment.baseUrl;
  protected readonly resourceUrl: string = this.config.resourceEndpoint;

  getList(limit: number, offset?: number) {
    return this.http.get<TModel[]>(`${this.baseUrl}${this.resourceUrl}`, { params: { limit: limit.toString(), offset: offset ?? 0 } });
  }

  getById(id: number) {
    return this.http.get<TModel>(`${this.baseUrl}${this.resourceUrl}/${id}`);
  }

  add(dto: TModel) {
    return this.http.post<TModel>(`${this.baseUrl}${this.resourceUrl}`, dto);
  }

  update(id: number, dto: TModel) {
    return this.http.put<TModel>(`${this.baseUrl}${this.resourceUrl}/${id}`, dto);
  }

  remove(id: number) {
    return this.http.delete<number>(`${this.baseUrl}${this.resourceUrl}/${id}`);
  }

  getCategory(){
    return this.http.get<TModel[]>('https://api.escuelajs.co/api/v1/categories?limit=10');
  }
}
