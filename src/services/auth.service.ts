import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SignInResponseDto } from '../app/auth/dto/sign-in-response.dto';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);

  signIn(credential: Credential): Observable<SignInResponseDto> {
    return this.http.post<SignInResponseDto>('http://localhost:8080/login', credential, { withCredentials: true });
  }

  // https://www.google.com/search?client=safari&rls=en&q=angular+19+send+cookie+with+request&ie=UTF-8&oe=UTF-8

  signUp(credential: Credential): Observable<String> {
    return this.http.post<String>('http://localhost:8080/register', credential);
  }

  signOut() {
    // destroy cookie
  }

  isAuthenticated(): boolean {
    return true;
  }
}
