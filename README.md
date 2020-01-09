# Email-Sender
-As a user I want to have an aplication where i can type a text and send it by email to a specified recepients.

Flow described:

-On a main page (called Dashboard) I expect to have a form with folowing controls:

  -Subject (text input) - where I can type in the Subject of letter
  
  -Message (rich text editor) - where I can enter the message itself and aply formatting styles
  
  -Recipients (text input with delimiting logic, chips, multiple inputs with an Add button etc - any sufficiend solution) - where I can specify the list of recipients
  
  -Send button

-After I specified Subject and Message and selected at least one recipient - I can invoke process of email sending

-On a beckend side WEB API should receive a model with specified data and send if through SMTP protocol.

-'FROM' field or a letter should be hard-coded on a backend

Acceptance criteria:

-Basic validation on frontend AND backnd should be applied:

  -Subject should not be empty and should not exceed 250 symbols limit
  
  -Message should not be empty and should not exceed 2048 symbols limit
  
  -At least one recipient should be selected
  
  -All recipients should be a valid email addresses
  
-Email shuold be actually sent and this fact can be validated

-Message input should be a rich text editor, so user can apply formatting(color, font size, paragraphs etc)

-In case of message sending failure (immediate ones, bouncing emails are out of scope) user should get a proper notification on a frontend side

Required technical stack: .NET CORE 3, WEB API, Angular 8+

Recomended libraries: one can select any of rich text editors, for example - CKEditor 5, Quill, TinyMCE

Note: One can use any SMTP server, bt easiest way is to enable this for Google GMAIL account and send from own inbox

Advanced level requirements:

-After sending save emails into a database and add a table to show them on a main page of frontend

## ToDo
Перед запуском потрібно поміняти шлях до сервера(appsettings.json -> "DatabaseConnection": "server=LAPTOP-H0Q68PRE\\LIUBOMYRSERV") і відповідно оновити базу update-database. 

Після запуску "сайту" ви опинетесь на вступній сторінці, звідти можна перейти на сторінку з формою для надсилання повідомлення (Compose) або на сторінку відправлених повідомлень(Sent). 

На сторінці з фомою для відправлення потрібно ввести необхідні дані (Отримувачі(один або декілька через кому), Тему повідомлення, та саме повідомлення) після чого з'явиться можливість натиснути кнопку Send, яка почне процес відправки повідомлення.

Якщо відправлення завершилось успішно, вас переспямує на стрінку з відправленими повідомленнями, де ви побачите щойно відправлене повідомлення, та усі раніше відправлені.

Також на цій сторінці, ви можете видалити повідомлення клікнувши на кнопку видалити у потрібного повідомлення.
