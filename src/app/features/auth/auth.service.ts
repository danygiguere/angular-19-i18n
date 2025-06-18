import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SignInResponseDto } from './dto/sign-in-response.dto';
import { CookieService } from 'ngx-cookie-service';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private cookieService: CookieService) {}
  
  http = inject(HttpClient);

  signIn(credential: Credential): Observable<SignInResponseDto> {
    return this.http.post<SignInResponseDto>('http://localhost:8080/login', credential, { withCredentials: true });
  }

  refreshToken(): Observable<SignInResponseDto> {
    return this.http.post<SignInResponseDto>('http://localhost:8080/refresh-token', { withCredentials: true });
  }

  signUp(credential: Credential): Observable<String> {
    return this.http.post<String>('http://localhost:8080/register', credential);
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

  signOut() {
    // destroy cookie
  }

  isAuthenticated(): boolean {
    return true;
  }
}
