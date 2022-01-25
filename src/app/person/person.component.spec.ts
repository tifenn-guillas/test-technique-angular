import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, Input } from '@angular/core';

import { PersonComponent } from "./person.component";
import { Person } from './models';

describe("PersonComponent", () => {
	@Component({ selector: 'app-person-generator', template: '' })
	class PersonGeneratorStubComponent { }

	@Component({ selector: 'app-search', template: '' })
	class SearchStubComponent {
		@Input() dataSource: Person[];
		@Input() displayedColumns: string[];
	}
	@Component({ selector: 'app-person-list', template: '' })
	class PersonneListStubComponent {
		@Input() dataSource: Person[];
		@Input() displayedColumns: string[];
	}

	let component: PersonComponent;
	let fixture: ComponentFixture<PersonComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				PersonComponent,
				PersonGeneratorStubComponent,
				SearchStubComponent,
				PersonneListStubComponent
			],
			imports: [
				HttpClientTestingModule
			]
		}).compileComponents();

		fixture = TestBed.createComponent(PersonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it("should create the component", () => {
		expect(component).toBeTruthy();
	});
});
