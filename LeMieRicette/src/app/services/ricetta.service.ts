import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


import {URL} from '../constants';
import {Ricetta} from '../model/ricetta.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class RicettaService {

    constructor(private http: HttpClient) {
    }

    list(): Observable<Ricetta[]> {
        return this.http.get<Ricetta[]>(URL.RICETTE);
    }

}
