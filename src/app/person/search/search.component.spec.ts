import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { PersonGeneratorComponent } from "../person-generator/person-generator.component";

import { SearchComponent } from "./search.component";
import { MatIconModule } from '@angular/material/icon';

describe("SearchComponent", () => {
	let component: SearchComponent;
	let fixture: ComponentFixture<SearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				SearchComponent
			],
			imports: [
				MatInputModule,
				MatIconModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create component", () => {
		expect(component).toBeTruthy();
	});
});
