import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Person } from "../person";
import { TranslateGenderPipe } from '../person-list/translate-gender.pipe';

@Component({
	selector: "app-search",
	templateUrl: "./search.component.html",
	styleUrls: ["./search.component.scss"],
	providers: [TranslateGenderPipe]
})
export class SearchComponent {
	@Input() dataSource: Person[];
	@Output() filteredData = new EventEmitter<Person[]>()

	count: number;

	constructor(private translateGender: TranslateGenderPipe) { }

	getFilteredData(value: string): void {
		let data: Person[] = [];
		const keys: string[] = Object.keys(this.dataSource[0]);
		this.dataSource.map((person: Person) => {
			for (let key of keys) {
				if (key === 'gender'
					&& this.translateGender.transform(person[key]).toLowerCase().search(value.toLowerCase()) !== -1) {
					data.push(person);
					break;
				}
				if (String(person[key]).toLowerCase().search(value.toLowerCase()) !== -1) {
					data.push(person);
					break;
				}
			}
		})
		this.count = data.length;
		this.filteredData.emit(data);
	}
}
