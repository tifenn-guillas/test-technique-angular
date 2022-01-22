import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, ValidationErrors, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { GenerationConfig } from "../generation-config";

@Component({
	selector: "app-person-generator",
	templateUrl: "./person-generator.component.html",
	styleUrls: ["./person-generator.component.scss"]
})
export class PersonGeneratorComponent {
	@Output() generateRequest = new EventEmitter<GenerationConfig>();

	generator: FormGroup = new FormGroup({
		count: new FormControl(1000),
		male: new FormControl(true),
		female: new FormControl(true)
	});


	constructor() { }

	generate(): void {
		const value: GenerationConfig = this.generator.value;
		if (this.generator.valid) {
			this.generateRequest.emit(value);
		}
	}

}
