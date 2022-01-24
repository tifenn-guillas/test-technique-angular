import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from '@angular/material/icon';

import { SearchComponent } from "./search.component";
import { TranslateGenderPipe } from '../person-list/translate-gender.pipe';
import { Person } from '../person';

const PERSONS: Person[] = [
	{
		id: 1,
		firstName: "John",
		lastName: "REESE",
		email: "john@reese.com",
		gender: "Male"
	},
	{
		id: 2,
		firstName: "Harold",
		lastName: "FINCH",
		email: "harold@finch.com",
		gender: "Male"
	},
	{
		id: 3,
		firstName: "Joss",
		lastName: "CARTER",
		email: "joss@carter.com",
		gender: "Female"
	}
];

describe("SearchComponent", () => {
	let component: SearchComponent;
	let fixture: ComponentFixture<SearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				SearchComponent
			],
			imports: [
				BrowserAnimationsModule,
				MatInputModule,
				MatIconModule
			],
			providers: [
				TranslateGenderPipe
			]
		}).compileComponents();

		fixture = TestBed.createComponent(SearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it("should create component", () => {
		expect(component).toBeTruthy();
	});

	it("#getFilteredData() should sort data with the given value", () => {
		component.dataSource = PERSONS;
		component.filteredData.subscribe((persons: Person[]) => {
			expect(persons).toEqual([PERSONS[2]]);
		});
		component.getFilteredData('Femme');
		expect(component.count).toEqual(1);
	});
});
