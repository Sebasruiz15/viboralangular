import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class User {
  url = `${environment.API_URL}/api/v1/cliente`
  http = inject(HttpClient)

  getUser(document:string){

    console.log('Getuser desde el servicio')
    const headers = new HttpHeaders({
       'accept': 'application/json',
       'Authorization': 'UF8QUsqELGBJ9czS6u6Qq1AGMCSWBXl24dWdgZj0vvjlBlo6gZcYSa7YmlElYChmBkTpCBpYA1a4EYSBdUa1'
    })
    return this.http.get(
      `${this.url}`, {headers}
    )
  }
}
