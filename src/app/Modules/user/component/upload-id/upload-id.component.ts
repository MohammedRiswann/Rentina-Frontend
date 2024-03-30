// upload-id.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PropertyService } from '../../services/propertyService.service';
import { ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../../services/data-sharing.service';

@Component({
  selector: 'app-upload-id',
  templateUrl: './upload-id.component.html',
  styleUrls: ['./upload-id.component.css'],
})
export class UploadIdComponent {
  selectedFile: File | null = null;
  userId: string = '';

  constructor(
    private http: HttpClient,
    private service: PropertyService,
    private route: ActivatedRoute,
    private shareService: DataSharingService
  ) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.userId = params['id'];
    });
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  uploadId() {
    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }

    console.log(this.selectedFile);
    const formData = new FormData();
    formData.append('files', this.selectedFile);
    formData.append('userId', this.userId);
    console.log(this.userId);

    this.service.uploadId(formData).subscribe((items) => {
      console.log(items);
      this.shareService.emitItems(items);
    });
  }
}
