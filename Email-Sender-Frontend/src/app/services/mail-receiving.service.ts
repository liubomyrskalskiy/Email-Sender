import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';


@Injectable()
export class MailReceivingService {

  constructor(private http: HttpClient) { }

  receiveMail(): any {
    return this.http.get(environment.apiUrl + '/mail');
  }
}
