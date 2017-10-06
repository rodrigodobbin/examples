import { Component, ElementRef } from '@angular/core';
import { FileUploaderService } from './file-uploader.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FileUploaderService]
})
export class AppComponent {

  constructor(
    private fileUploader: FileUploaderService,
    private elem: ElementRef
  ) {

  }
  
  public uploadImage(): void {
    let files = this.elem.nativeElement.querySelector('#selectFile').files;
    let formData = new FormData();
    let file = files[0];
    formData.append('selectFile', file, file.name);
    this.fileUploader
      .uploadImage(formData)
      .subscribe(res=> console.log('Resposta => ', res));
  }
}
