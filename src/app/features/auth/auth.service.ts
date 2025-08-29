import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SignInResponseDto } from './dto/sign-in-response.dto';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';
import {AuthDto} from './dto/auth.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private cookieService: CookieService) {}

  http = inject(HttpClient);

  signInCookie(credential: Credential): Observable<SignInResponseDto> {
    console.log("sign apiUrl:", environment.apiUrl);
    return this.http.post<SignInResponseDto>(`${environment.apiUrl}/api/login/cookie`, credential, { withCredentials: true });
  }

  refreshTokenCookie(): Observable<SignInResponseDto> {
    return this.http.post<SignInResponseDto>(`${environment.apiUrl}/api/refresh-token/cookie`, {}, { withCredentials: true });
  }

  signIn(credential: Credential): Observable<AuthDto> {
    console.log("sign apiUrl:", environment.apiUrl);
    return this.http.post<AuthDto>(`${environment.apiUrl}/api/login`, credential);
  }

  refreshToken(): Observable<AuthDto> {
    return this.http.post<AuthDto>(`${environment.apiUrl}/api/refresh-token`, {});
  }

  signUp(credential: Credential): Observable<String> {
    return this.http.post<String>(`${environment.apiUrl}/api/register`, credential);
  }

  async ensureTokenValid(): Promise<void> {
    const expiresAtStr = this.cookieService.get('access_token_expires_at');
    if (expiresAtStr) {
      const expiresAt = Number(expiresAtStr);
      console.log('Expires at:', new Date(expiresAt).toLocaleString());
      if (expiresAt <= Date.now()) {
        console.log('Refreshing token');
        this.refreshToken().subscribe({
          next: (response) => {
            this.cookieService.set('user_id', response.user.id.toString(), undefined, '/');
            this.cookieService.set('access_token', response.accessToken, undefined, '/');
            this.cookieService.set('refresh_token', response.refreshToken, undefined, '/');
            this.cookieService.set('access_token_expires_at', response.accessTokenExpiresAtTimestamp, undefined, '/');
            window.location.href = '/';
          },
          error: (e) => {

          }
        });

        console.log('Token refreshed successfully');
      }
    }
  }

  signOut(): void {
    console.log('Signing out');
    this.cookieService.delete('userId', '/');
    this.cookieService.delete('access_token_expires_at', '/');
    this.http.post<String>(`${environment.apiUrl}/api/logout`, {}, { withCredentials: true }).subscribe(() => {
      console.log('Logged out successfully');
      window.location.href = '/';
    });
  }


 isAuthenticated(): boolean {
    const expiresAtStr = this.cookieService.get('access_token_expires_at');
    if (!expiresAtStr) {
      return false;
    }
    const expiresAt = Number(expiresAtStr);
    return expiresAt > Date.now();
  }
}
