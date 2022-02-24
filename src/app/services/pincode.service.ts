import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:4000/getPincode';

@Injectable({
    providedIn: 'root'
})
export class PincodeService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(baseUrl);
    }

    post(data: any) {
        return this.http.post(baseUrl,data);
    }



}