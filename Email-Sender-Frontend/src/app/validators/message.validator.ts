import { FormControl } from '@angular/forms';


export class MessageValidator {
  messageValid(control: FormControl): { [s: string]: boolean } {
    if (control.value != null) {
      const text = control.value.replace(/<[^>]+>/g, '');
      if (text.length > 2048) {
        return { multipleEmailValid: false };
      }
      return null;
    }
  }
}
