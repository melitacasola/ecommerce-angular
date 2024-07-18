import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable, InjectionToken } from '@angular/core';
import { environment } from '../../../../environments/environments';


export interface ServiceConfig {
  resourceEndpoint: string;
}

export const SERVICE_CONFIG = new InjectionToken<ServiceConfig>('ServiceConfig')

@Injectable({
  providedIn: 'root'
})
export class GenericService<TModel> {
  private http = inject(HttpClient);
  protected readonly baseUrl?: string;
  protected readonly resourceUrl?: string;

  constructor(@Inject(SERVICE_CONFIG) config: ServiceConfig) {
    this.baseUrl = environment.baseUrl;
    this.resourceUrl = config.resourceEndpoint;
  }

  getList(offset?: number) {
    return this.http.get<TModel[]>(`${this.baseUrl}${this.resourceUrl}`, { params: { limit: 8, offset: offset??0 } });
  }

  getById(id: number) {
    return this.http.get<TModel[]>(`${this.baseUrl}${this.resourceUrl}/${id}`);
  }

  add(dto: TModel) {
    return this.http.post<TModel>(`${this.baseUrl}${this.resourceUrl}`, dto);
  }

  update(dto: TModel) {
    return this.http.put<TModel>(`${this.baseUrl}${this.resourceUrl}`, dto);
  }

  remove(id: number) {
    return this.http.delete<number>(`${this.baseUrl}${this.resourceUrl}/${id}`);
  }

}
