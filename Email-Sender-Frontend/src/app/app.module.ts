import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ComposeComponent } from './components/compose/compose.component';
import { MultipleEmailValidator } from './validators/multiple-email.validator';
import { SubjectValidator } from './validators/subject.validator';
import { MessageValidator } from './validators/message.validator';
import { MailSendingService } from './services/mail-sending.service';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SentComponent } from './components/sent/sent.component';
import { EmailElementComponent } from './components/email-element/email-element.component';
import { MailDataService } from './services/mail-data.service';
import { MailReceivingService } from './services/mail-receiving.service';
import { MailDeletingService } from './services/mail-deleting.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    NotFoundComponent,
    ComposeComponent,
    SentComponent,
    EmailElementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    EditorModule
  ],
  providers: [
    MultipleEmailValidator,
    SubjectValidator,
    MessageValidator,
    MailSendingService,
    MailReceivingService,
    MailDeletingService,
    MailDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
