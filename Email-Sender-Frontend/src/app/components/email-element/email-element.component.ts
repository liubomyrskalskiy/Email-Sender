import { Component, OnInit, Input, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { EmailModel } from 'src/app/models/email.model';
import { MailDeletingService } from 'src/app/services/mail-deleting.service';
import { MailDataService } from 'src/app/services/mail-data.service';


@Component({
  selector: 'app-email-element',
  templateUrl: './email-element.component.html',
  styleUrls: ['./email-element.component.scss']
})
export class EmailElementComponent implements OnInit {

  @Input() emailElement: EmailModel;

  securityContext = SecurityContext.STYLE;

  constructor(
    public sanitizer: DomSanitizer,
    private mailDeletingService: MailDeletingService,
    private mailDataService: MailDataService
  ) { }

  ngOnInit() {

  }

  onDelete() {
    this.mailDeletingService.deleteMail(this.emailElement.id).subscribe(responce => console.log(responce));
    this.mailDataService.deletMail(this.emailElement);
  }

}
