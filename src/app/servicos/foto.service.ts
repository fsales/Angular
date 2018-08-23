import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FotoComponent } from "../foto/foto.component";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class FotoService {

    private url = 'http://localhost:3000/v1/fotos/';
    private cabecalho = {
        headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };

    constructor(private http: HttpClient) {
    }

    listar(): Observable<FotoComponent> {
        return this.http.get<FotoComponent>(this.url);
    }

    salvar(foto: FotoComponent): Observable<Object> {
        return this.http.post(this.url, foto ,this.cabecalho);
    }

    deletar(foto: FotoComponent): Observable<Object> {
        return this.http.delete(this.url + foto._id);
    }
}