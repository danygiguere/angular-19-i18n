import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  async create(postData: any, authToken: string) {
    const response = await fetch(`${environment.apiUrl}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authToken
      },
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${error}`);
    }

    return await response.json();
  }
}



// import { Injectable } from '@nestjs/common';
// import { HttpService } from '@nestjs/axios';
//
// @Injectable()
// export class PostService {
//   constructor(private httpService: HttpService) {}
//
//   async create(postData: any, authToken: string) {
//     const response = await this.httpService.post(
//       `${environment.apiUrl}/posts`,
//       postData,
//       {
//         headers: {
//           'Authorization': `Bearer ${authToken}`
//         }
//       }
//     ).toPromise();
//     return response.data;
//   }
// }
