import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FileUploaderService {

  constructor(private http: Http) { }

  public uploadImage(formdata: any ) {
    let url: string = 'http://localhost/examples/angular-4upload-image/api/fileUpload.php';
    return this.http.post(url, formdata)
      .catch(this._errorHandler);
  }

  private _errorHandler(error: Response) {
    console.error('Error Occured: ' + error);
    return Observable.throw(error || 'Some Error on Server Occured');
  }

}
