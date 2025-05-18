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
    console.log("authservice.signIn", credential)
    return this.http.post<SignInResponseDto>('http://localhost:3333/signin', credential);
  }

  signOut() {
    // destroy cookie
  }

  isAuthenticated(): boolean {
    return true;
  }
}
