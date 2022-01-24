import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Person } from "../person";
import { TranslateGenderPipe } from '../person-list/translate-gender.pipe';

@Component({
	selector: "app-advanced-search",
	templateUrl: "./advanced-search.component.html",
	styleUrls: ["./advanced-search.component.scss"],
	providers: [TranslateGenderPipe]
})
export class AdvancedSearchComponent {
	@Input() dataSource: Person[];
	@Output() filteredData = new EventEmitter<Person[]>()

	count: number;

	constructor(private translateGender: TranslateGenderPipe) { }
}
