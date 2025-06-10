import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { PostDto } from '../app/posts/dto/post.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  http = inject(HttpClient);

  create(postDto: PostDto): Observable<PostDto> {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ...'
      });
    return this.http.post<PostDto>('http://localhost:8080/posts', postDto, { withCredentials: true });
  }

}
