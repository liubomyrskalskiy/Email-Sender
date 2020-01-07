import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EmailModel } from '../models/email.model';
import { environment } from 'src/environments/environment';


@Injectable()
export class MailSendingService {

  constructor(private http: HttpClient) { }

  sendMail(email: EmailModel) {
    return this.http.post(environment.apiUrl + '/mail', email);
  }
}
