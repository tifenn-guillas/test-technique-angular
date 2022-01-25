import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { Component, Input } from '@angular/core';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { PersonListComponent } from "./person-list.component";
import { TranslateGenderPipe } from './translate-gender.pipe';
import { Person } from '../../models';

describe("PersonListComponent", () => {
	@Component({ selector: 'app-person-generator', template: '' })
	class PersonGeneratorStubComponent { }

	@Component({ selector: 'app-search', template: '' })
	class SearchStubComponent {
		@Input() dataSource: Person[];
	}

	let component: PersonListComponent;
	let fixture: ComponentFixture<PersonListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				PersonListComponent,
				PersonGeneratorStubComponent,
				SearchStubComponent,
				TranslateGenderPipe
			],
			imports: [
				MatTableModule,
				MatCheckboxModule,
				MatInputModule,
				MatButtonModule,
				ReactiveFormsModule,
				HttpClientTestingModule,
				NoopAnimationsModule
			]
		}).compileComponents();

		fixture = TestBed.createComponent(PersonListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it("should create the component", () => {
		expect(component).toBeTruthy();
	});
});
