import axios, { AxiosHeaders } from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

/**
 * Simple HTTP Service
 *
 * Creates an axios instance and sets the headers.
 *
 * Provides a get and post methods to be used externally
 *
 * @argument baseURL {string} API base url
 */
export class HttpService {
  private axios: AxiosInstance;

  constructor(baseUrl: string) {
    this.axios = axios.create({
      baseURL: baseUrl,
      headers: this.getHeaders()
    });
  }

  protected getHeaders(): Partial<AxiosHeaders> {
    return {
      'Content-Type': 'application/json'
    };
  }

  // ------------------------- HTTP methods requests shortcuts ---------------------------

  public get<T>(url: string, options: Partial<AxiosRequestConfig<T>> = {}): Promise<T> {
    return this.axios.get<T>(url, options).then((res) => res.data);
  }

  public post<T>(url: string, payload: any, options: Partial<AxiosRequestConfig<T>> = {}): Promise<T> {
    return this.axios.post<T>(url, payload, options).then((res) => res.data);
  }
}
