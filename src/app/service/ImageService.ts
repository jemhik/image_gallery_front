import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  public getImages(params:any): Observable<any> {
    return this.http.get<any>(this.apiServerUrl +'/images', {params});
  }

  public searchImages(params:any): Observable<any> {
    return this.http.get<any>(this.apiServerUrl +'/searchImages', {params});
  }

  public uploadImages(uploadImageData:FormData): Observable<any> {
    return this.http.post<any>(this.apiServerUrl +'/image/upload',
      uploadImageData, { reportProgress: true, observe: 'events' });
  }
}
