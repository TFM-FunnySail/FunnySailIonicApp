import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from "../services/auth/auth.service";
import {Router} from "@angular/router";
import {catchError, tap} from "rxjs/operators";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(protected authService: AuthService, protected router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenInfo = this.authService.getTokenIfLoggedIn();

    if(tokenInfo){
      request = request.clone({
        setHeaders: {
          authorization: `Bearer ${ tokenInfo.token }`
        }
      });
    }

    return next.handle(request).pipe(
      tap(evt => {

      }),
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          this.router.navigateByUrl('auth/login');
        }
        console.log(err);
        return throwError( err );
      })
    );
  }
}
