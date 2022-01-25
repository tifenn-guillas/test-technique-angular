import { FormControl, FormGroup } from '@angular/forms';
import { GenderSelectionValidator } from './gender-selection-validator.directive';

describe('GenderSelectionValidator', () => {
	it('should return valid', () => {
		let form: FormGroup = new FormGroup({
			male: new FormControl(true),
			female: new FormControl(true)
		}, { validators: GenderSelectionValidator });
		expect(form.errors).toBeNull();

		form.controls.male.setValue(false);
		expect(form.errors).toBeNull();
	});

	it('should return noGenderSelected error', () => {
		const form: FormGroup = new FormGroup({
			male: new FormControl(false),
			female: new FormControl(false)
		}, { validators: GenderSelectionValidator });
		expect(form.errors).toBeTruthy();
	});
});
