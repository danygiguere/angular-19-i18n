import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SignInResponseDto } from './dto/sign-in-response.dto';
import { CookieService } from 'ngx-cookie-service';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private cookieService: CookieService) {}

  http = inject(HttpClient);

  signIn(credential: Credential): Observable<SignInResponseDto> {
    return this.http.post<SignInResponseDto>(`${environment.apiUrl}/login`, credential, { withCredentials: true });
  }

  refreshToken(): Observable<SignInResponseDto> {
    return this.http.post<SignInResponseDto>(`${environment.apiUrl}/refresh-token`, {}, { withCredentials: true });
  }

  signUp(credential: Credential): Observable<String> {
    return this.http.post<String>(`${environment.apiUrl}/register`, credential);
  }

  async ensureTokenValid(): Promise<void> {
    const expiresAtStr = this.cookieService.get('access_token_expires_at');
    if (expiresAtStr) {
      const expiresAt = Number(expiresAtStr);
      console.log('Expires at:', new Date(expiresAt).toLocaleString());
      if (expiresAt <= Date.now()) {
        console.log('Refreshing token');
        await firstValueFrom(this.refreshToken());
        console.log('Token refreshed successfully');
      }
    }
  }

  signOut(): void {
    console.log('Signing out');
    this.cookieService.delete('userId', '/');
    this.cookieService.delete('access_token_expires_at', '/');
    this.http.post<String>(`${environment.apiUrl}/logout`, {}, { withCredentials: true }).subscribe(() => {
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
