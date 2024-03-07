import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../../environment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ArvoreService {

  constructor(private httpClient: HttpClient) { }

  public getAll():Observable<any> {
    return this.httpClient.get(enviroment.ARVORE);
  }
}
