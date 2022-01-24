import { TranslateGenderPipe } from './translate-gender.pipe';

describe('TranslateGenderPipe', () => {
	let pipe = new TranslateGenderPipe();

	it('should return translated gender', () => {
		expect(pipe.transform('Male')).toEqual('Homme');
		expect(pipe.transform('Female')).toEqual('Femme');
		expect(pipe.transform('Other')).toEqual('Other');
	});
});
