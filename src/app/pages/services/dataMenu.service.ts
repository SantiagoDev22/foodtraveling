import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Menu } from "src/app/interfaces/interfaces";


@Injectable({
    providedIn: 'root'
})

export class DataMenuService {

    constructor( private http: HttpClient) { }

    getMenuOptions(){
        return this.http.get<Menu[]>('')
    }
}