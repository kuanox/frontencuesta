import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Style } from 'src/app/shared/models/encuesta/style';

const baseUrl: string = environment.baseEncuestaServiceUrl + 'style/';

@Injectable({ providedIn: 'root' })
export class StyleService {

    constructor(private httpClient: HttpClient) { }

    public fetchAllStyles(): Observable<Style[]> {
        return this.httpClient.get<Style[]>(baseUrl + `all`);
    }
    
    public fetchById(id: number): Observable<Style> {
        return this.httpClient.get<Style>(baseUrl + `detail/${id}`);
    }

    public create(style: Style): Observable<any> {
        return this.httpClient.post<any>(baseUrl + 'create', style);
    }

    public update(style: Style): Observable<any> {
        let headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': '*/*'}); 
        let data = JSON.stringify(style);
        console.table("fetch => data => " + data);
        return this.httpClient.put<any>(baseUrl + `update`, style, {headers: headers});
    }

    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(baseUrl + `delete/${id}`);
    }      

}