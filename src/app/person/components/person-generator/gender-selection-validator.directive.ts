import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const GenderSelectionValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
	const male = control.get('male');
	const female = control.get('female');

	return !male.value && !female.value ? { 'noGenderSelected': true } : null;
};