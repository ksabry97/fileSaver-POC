import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DownloadServiceService {
  constructor(private http: HttpClient) {}

  // download file

  downloadFile() {
    let url =
      'https://s3.dinarcrm.com/sortech/b9bba35e-15ed-4537-9237-fb0cdf8df733/Chat/Whatsapp/7bf0d394-c380-43f4-b992-0fa71c86c060/e1ef2f54-0077-4f8f-a82b-e76840cd416c.pdf';
    return this.http.get(url, { responseType: 'blob' });
  }
}
