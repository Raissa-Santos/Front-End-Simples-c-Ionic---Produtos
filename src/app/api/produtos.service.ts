import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const urlBase = "https://ranekapi.origamid.dev/json/api/produto";

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  constructor(private http: HttpClient) { }

  getAll(): Promise<any> {
    return this.http
    .get(`${urlBase}`)
    .toPromise();
  }
}
