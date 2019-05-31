import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transcription } from './transcription';

const API = 'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c';

@Injectable({providedIn : 'root'})
export class TranscriptionService{

    constructor(private http: HttpClient){ }
        
    listTranscriptions(){
        return this.http
            .get<Transcription[]>(API);
    }
}