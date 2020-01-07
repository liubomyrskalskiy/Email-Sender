import { FormControl } from '@angular/forms';


export class MultipleEmailValidator {
  multipleEmailValid(control: FormControl): { [s: string]: boolean } {
    // tslint:disable-next-line: max-line-length
    const regexp = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9\-]+\.)+([a-zA-Z0-9\-\.]+)+([,]\s([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9\-]+\.)+([a-zA-Z0-9\-\.]+))*$/);
    if (!regexp.test(control.value)) {
      return { multipleEmailValid: false };
    }
    return null;
  }
}
