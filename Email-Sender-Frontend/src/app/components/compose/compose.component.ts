import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MultipleEmailValidator } from 'src/app/validators/multiple-email.validator';
import { SubjectValidator } from 'src/app/validators/subject.validator';
import { MessageValidator } from 'src/app/validators/message.validator';
import { MailSendingService } from 'src/app/services/mail-sending.service';
import { EmailModel } from 'src/app/models/email.model';


@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {

  emailForm: FormGroup;

  inputFieldStyle = {
    'margin-top': '2em'
  };

  constructor(
    private emailValidator: MultipleEmailValidator,
    private subjectValidator: SubjectValidator,
    private messageValidator: MessageValidator,
    private mailSendingService: MailSendingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.emailForm = new FormGroup({
      recepients: new FormControl('', [
        Validators.required,
        this.emailValidator.multipleEmailValid
      ]),
      subject: new FormControl('', [Validators.required, this.subjectValidator.subjectValid]),
      message: new FormControl('', [Validators.required, this.messageValidator.messageValid])
    });
  }

  sendRequest() {
    const email: EmailModel = {
      id: 0,
      recipients: this.emailForm.get('recepients').value.split(', '),
      subject: this.emailForm.get('subject').value,
      message: this.emailForm.get('message').value
    };
    this.mailSendingService.sendMail(email).subscribe(() => {
      this.router.navigate(['sent']);
    },
      error => {
        alert('Status: ' + error.status + '\nMesage: ' + error.message);
      });
  }

}
