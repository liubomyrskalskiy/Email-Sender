import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';


@Injectable()
export class MailDeletingService {

  constructor(private http: HttpClient) { }

  deleteMail(id: number): any {
    return this.http.delete(`${environment.apiUrl}/mail/${id}`);
  }
}
