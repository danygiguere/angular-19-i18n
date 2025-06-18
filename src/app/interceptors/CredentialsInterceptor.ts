    import { inject, Injectable } from '@angular/core';
    import {
      HttpEvent,
      HttpInterceptor,
      HttpHandler,
      HttpRequest,
    } from '@angular/common/http';
    import { Observable } from 'rxjs';


    @Injectable()
    export class CredentialsInterceptor implements HttpInterceptor {
    

      intercept(
        request: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        const modifiedRequest = request.clone({
          withCredentials: true,
        });
       
        return next.handle(modifiedRequest);
      }
    }
