import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getItem(key){
    return localStorage.getItem(key);
  }

  public setItem(key,value){
    return localStorage.setItem(key,value);
  }

  deleteItem(key: string) {
    return localStorage.removeItem(key);
  }

  public setItemAndParse(key:string,value:any){
    return localStorage.setItem(key,JSON.stringify(value));
  }
}
