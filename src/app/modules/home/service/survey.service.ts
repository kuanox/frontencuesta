import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Survey } from 'src/app/shared/models/encuesta/survey';


const baseUrl: string = environment.baseEncuestaServiceUrl + 'survey/';

@Injectable({ providedIn: 'root' })
export class SurveyService {

    constructor(private httpClient: HttpClient) { }

    public fetchAllSurveys(): Observable<Survey[]> {
        return this.httpClient.get<Survey[]>(baseUrl + `all`);
    }
    
    public fetchById(id: number): Observable<Survey> {
        return this.httpClient.get<Survey>(baseUrl + `detail/${id}`);
    }

    public create(survey: Survey): Observable<any> {
        return this.httpClient.post<any>(baseUrl + 'create', survey);
    }

    public update(survey: Survey): Observable<any> {
        let headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': '*/*'}); 
        let data = JSON.stringify(survey);
        console.table("fetch => data => " + data);
        return this.httpClient.put<any>(baseUrl + `update`, survey, {headers: headers});
    }

    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(baseUrl + `delete/${id}`);
    }      

}
