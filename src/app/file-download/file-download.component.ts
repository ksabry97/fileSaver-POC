import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadServiceService } from '../services/download-service.service';

@Component({
  selector: 'app-file-download',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.scss'],
})
export class FileDownloadComponent implements OnInit {
  constructor(private downloadServ: DownloadServiceService) {}

  ngOnInit(): void {}

  // function to download file by file saver
  downloadFile(url: string, filName: string) {
    this.downloadServ.downloadFile(url, filName);
  }
}
