import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from '@angular/material/icon';

import { SearchComponent } from "./search.component";
import { TranslateGenderPipe } from '../person-list/translate-gender.pipe';
import { Person } from '../../models';

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
				MatIconModule,
				FormsModule,
				ReactiveFormsModule
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
		component.displayedColumns = ["id", "firstName", "lastName", "gender", "email"];
		component.dataSource = PERSONS;
		component.ngOnInit();
		component.getFilteredData('femme');
		expect(component.filteredData.length).toEqual(1);
	});

	it("#getAdvancedFilteredData() should sort data with the given value", () => {
		component.displayedColumns = ["id", "firstName", "lastName", "gender", "email"];
		component.dataSource = PERSONS;
		component.ngOnInit();
		component.advancedSearchInput.controls.firstName.setValue('ha');
		component.advancedSearchInput.controls.gender.setValue('homme');
		component.getAdvancedFilteredData();
		expect(component.filteredData.length).toEqual(1);
	});

	it("#resetSearch() should empty filteredData", () => {
		component.filteredData = PERSONS;
		component.resetSearch();
		expect(component.filteredData.length).toEqual(0);
	});

	it("#contains(sentence, str) should check if str is in sentence", () => {
		expect(component.contains('toto', 'a')).toBeFalsy();
		expect(component.contains('toto', 'o')).toBeTruthy();
	});
});
