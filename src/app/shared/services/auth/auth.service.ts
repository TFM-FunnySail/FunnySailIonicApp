import { Injectable } from '@angular/core';
import {AccountService, AuthenticateResponseDTO} from "../../sdk";
import {Router} from "@angular/router";
import {StorageService} from "../storage/storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenStorageKey:string = "tokenInfo";

  constructor(protected storageService:StorageService,
              protected accountApiService:AccountService,
              protected router:Router) { }

  public login(data,callback,callbackErr){
    return this.accountApiService.apiAccountLoginPost(data).subscribe(resp =>{
        this.saveToken(resp);
        callback(resp);
      },
      error => callbackErr(error))
  }

  private saveToken(data: AuthenticateResponseDTO) {
    this.storageService.setItem(this.tokenStorageKey,JSON.stringify({
      token:data.jwtToken,
      tokenExpiresIn:Number.parseFloat(data.jwtTokenExpiresIn),
      refreshTokenExpiresIn:Number.parseFloat(data.refreshTokenExpiresIn),
    }));
  }

  isLoggedIn() {
    const tokenInfo = this.getTokenInfo();

    return tokenInfo && tokenInfo.token && this.isValidExpiresIn(tokenInfo.tokenExpiresIn);
  }

  private getTokenInfo() {
    return JSON.parse(this.storageService.getItem(this.tokenStorageKey));
  }

  private isValidExpiresIn(expiresIn:number){
    return expiresIn > (new Date().getTime() + 60 * 1000);
  }

  logout() {
    this.logoutAction();
  }

  getTokenIfLoggedIn() {
    const tokenInfo = this.getTokenInfo();

    if(tokenInfo){
      if(!this.isValidExpiresIn(tokenInfo.tokenExpiresIn)){
        this.logoutAction();
      }
    }

    return tokenInfo;
  }

  private logoutAction() {
    this.storageService.deleteItem(this.tokenStorageKey);
    this.router.navigateByUrl('auth/login');
  }
}
