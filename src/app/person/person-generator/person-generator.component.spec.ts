import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { PersonGeneratorComponent } from "./person-generator.component";
import { GenerationConfig } from '../generation-config';

describe("PersonGeneratorComponent", () => {
	let component: PersonGeneratorComponent;
	let fixture: ComponentFixture<PersonGeneratorComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PersonGeneratorComponent],
			imports: [
				MatCheckboxModule,
				MatFormFieldModule,
				MatInputModule,
				MatButtonModule,
				ReactiveFormsModule,
				NoopAnimationsModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PersonGeneratorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create the component", () => {
		expect(component).toBeTruthy();
	});

	it("#generate() should emit event with generation config", () => {
		component.generateRequest.subscribe((event: GenerationConfig) =>
			expect(event).toEqual({ count: 1000, male: true, female: true })
		);
		component.generate();
	});
});
