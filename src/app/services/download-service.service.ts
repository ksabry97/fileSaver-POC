import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
@Injectable({
  providedIn: 'root',
})
export class DownloadServiceService {
  constructor(private http: HttpClient) {}

  // get File from minio
  getFile(url: string) {
    return this.http.get(url, { responseType: 'blob' });
  }

  // download file to the client side

  downloadFile(url: string, filName: string) {
    this.getFile(url).subscribe({
      next: (data: Blob) => {
        saveAs(data, filName);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  }
}
