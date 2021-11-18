import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, retry, throwError } from "rxjs";
import { Inscricao } from "./models/inscricao.model";


@Injectable({
    providedIn: "root"
})


export class InscricaoService {

    private REST_API_SERVER = "http://localhost:8080/inscricao/api";


    constructor(private httpClient: HttpClient) { 

    }


    handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
          // Client-side errors
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Server-side errors
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }


    public sendInscricao(inscricao: any):Observable<Inscricao> {
        return this.httpClient.post<Inscricao>(this.REST_API_SERVER, inscricao);
    }

    public getInscricoes():Observable<Inscricao[]> {
        return this.httpClient.get<Inscricao[]>(this.REST_API_SERVER+"/all").pipe(retry(3), catchError(this.handleError));
    }

}
