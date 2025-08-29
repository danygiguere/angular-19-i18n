import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { PostDto } from './dto/post.dto';
import { Observable } from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
     constructor(private cookieService: CookieService,
       private http: HttpClient) {}

          authService = inject(AuthService);

  async create(postDto: PostDto): Promise<Observable<PostDto>> {
    await this.authService.ensureTokenValid();
    console.log('Creating post with DTO:');
    return Promise.resolve(
      this.http.post<PostDto>(`${environment.apiUrl}/posts`, postDto, { withCredentials: true })
    );
  }

  async update(id: string, postDto: PostDto): Promise<Observable<PostDto>> {
    await this.authService.ensureTokenValid();
    console.log('Updating post with DTO:');
    return Promise.resolve(
      this.http.put<PostDto>(`${environment.apiUrl}/posts/${id}`, postDto, { withCredentials: true })
    );
  }

}
