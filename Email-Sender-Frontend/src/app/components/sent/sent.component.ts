import { Component, OnInit } from '@angular/core';

import { MailDataService } from 'src/app/services/mail-data.service';
import { MailReceivingService } from 'src/app/services/mail-receiving.service';


@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit {

  constructor(public mailDataService: MailDataService, private mailReceivingService: MailReceivingService) { }

  ngOnInit() {
    this.mailReceivingService.receiveMail().subscribe(responce => {
      this.mailDataService.setReceivedEmails(responce);
    }, error => {
      alert('Status: ' + error.status + '\nMesage: ' + error.message);
    });
  }

}
