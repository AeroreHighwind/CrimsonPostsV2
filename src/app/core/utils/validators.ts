import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function fieldsMatchValidator(controlName: string, matchingControlName: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
        const control = formGroup.get(controlName);
        const matchingControl = formGroup.get(matchingControlName);

        if (!control || !matchingControl) {
            return null;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ fieldsMatch: true });
            return { fieldsMatch: true };
        } else {
            matchingControl.setErrors(null);
        }

        return null;
    };
}
