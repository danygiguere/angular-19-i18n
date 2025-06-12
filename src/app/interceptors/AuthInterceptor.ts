import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('AuthInterceptor: Intercepting request', req);
         console.log('AuthInterceptor: Error object', error); 
        if (error.status === 401) {
          // Handle 401 error (e.g., redirect to login, show message, etc.)
          console.warn('Unauthorized! Redirecting to login...');
          // Example: window.location.href = '/login';
        }
        return throwError(() => error);
      })
    );
  }
}