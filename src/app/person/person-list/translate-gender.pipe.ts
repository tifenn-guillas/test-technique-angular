import { Pipe, PipeTransform } from '@angular/core';

/*
 * Translate gender from English to French
 * Usage:
 *   gender | translateGender
 * Example:
 *   {{ Female | translateGender }}
 *   formats to: Femme
*/
@Pipe({ name: 'translateGender' })
export class TranslateGenderPipe implements PipeTransform {
	transform(gender: string): string {
		switch (gender) {
			case 'Male':
				return 'Homme';
			case 'Female':
				return 'Femme'
			default:
				return gender;
		}
	}
}