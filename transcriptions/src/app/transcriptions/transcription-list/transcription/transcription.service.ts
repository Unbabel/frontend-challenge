import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

import { Transcription } from './transcription';
import { Observable } from 'rxjs';

const API = 'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c';

@Injectable({providedIn : 'root'})
export class TranscriptionService{

    constructor(private http: HttpClient){ }
        
    getTranscriptions(): Observable<Transcription[]> {
        return this.http.get<Transcription[]>(API);
    }

    submitTranscriptions(transcriptions: Transcription[] ) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        let options = { headers: headers };
        return this.http.post<Transcription[]>(API,transcriptions,options).pipe(res => res)
    }


}