import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import {Observable} from 'rxjs';
import {Response} from '../../app';

@Injectable({
  providedIn: 'root',
})
export class User {
  url = `${environment.API_URL}/api/v1/cliente`
  http = inject(HttpClient)

  getUser(identificacion:string): Observable<Response> {

    console.log('Getuser desde el servicio')

    const headers = new HttpHeaders({
       'accept': 'application/json',
       'Authorization': 'UF8QUsqELGBJ9czS6u6Qq1AGMCSWBXl24dWdgZj0vvjlBlo6gZcYSa7YmlElYChmBkTpCBpYA1a4EYSBdUa1'
    })
    return this.http.get<Response>(
      `${this.url}/${identificacion}`, {headers}
    )
  }
}
