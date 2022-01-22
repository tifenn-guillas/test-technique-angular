import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, ValidationErrors, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { GenerationConfig } from "../generation-config";
import { GenderSelectionValidator } from './gender-selection-validator.directive';

@Component({
	selector: "app-person-generator",
	templateUrl: "./person-generator.component.html",
	styleUrls: ["./person-generator.component.scss"]
})
export class PersonGeneratorComponent {
	@Output() generateRequest = new EventEmitter<GenerationConfig>();

	generator: FormGroup = new FormGroup({
		count: new FormControl(1000, {
			validators: [
				Validators.required,
				Validators.min(1),
				Validators.max(1000)
			],
			updateOn: 'change'
		}),
		male: new FormControl(true),
		female: new FormControl(true)
	}, { validators: GenderSelectionValidator });


	constructor() { }

	log() {
		console.log(this.generator.valid);
		console.log(this.generator.value);
		console.log(this.generator.hasError('noGenderSelected'));
	}

	generate(): void {
		const value: GenerationConfig = this.generator.value;
		if (this.generator.valid) {
			this.generateRequest.emit(value);
		}
	}

}
