import { Injectable } from '@angular/core';

import { EmailModel } from '../models/email.model';


@Injectable()
export class MailDataService {
  emails: EmailModel[] = [];

  setReceivedEmails(responce: EmailModel[]) {
    this.emails = responce;
    this.emails.reverse();
  }

  deletMail(email: EmailModel) {
    this.emails = this.emails.filter(item => item !== email);
  }
}
