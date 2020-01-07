import { FormControl } from '@angular/forms';


export class SubjectValidator {
  subjectValid(control: FormControl): { [s: string]: boolean } {
    if (control.value != null) {
      if (control.value.length > 250) {
        return { subjectValid: false };
      }
      return null;
    }
  }
}
