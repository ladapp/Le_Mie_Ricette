import {Utente} from '../model/utente.model';

export class Ricetta {
    id: number;
    nome: string;
    tipo: string;
    steps: string;
    numero_persone: number;
    tempo: number;
    image: string;
    flag:number;
    inseritoDa: Utente;

}
