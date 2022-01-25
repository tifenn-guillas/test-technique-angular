import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

import { Person } from "../../models";
import { TranslateGenderPipe } from '../person-list/translate-gender.pipe';

@Component({
	selector: "app-search",
	templateUrl: "./search.component.html",
	styleUrls: ["./search.component.scss"],
	providers: [TranslateGenderPipe]
})
export class SearchComponent implements OnInit {
	@Input() dataSource: Person[] = [];
	@Input() displayedColumns: string[] = [];
	@Output() emitFilteredData = new EventEmitter<Person[]>()

	filteredData: Person[] = [];
	searchInput = new FormControl();
	advancedSearchInput: FormGroup = new FormGroup({});
	count: number;
	displayAdvancedSearch = false;

	constructor(private translateGender: TranslateGenderPipe) { }

	ngOnInit() {
		this.displayedColumns.forEach((col: string) => {
			this.advancedSearchInput.addControl(col, new FormControl());
		});
	}

	getFilteredData(value: string): void {
		this.advancedSearchInput.reset();
		let data: Person[] = [];
		this.dataSource.forEach((person: Person) => {
			for (let col of this.displayedColumns) {
				let attr: string = person[col];
				if (col === 'gender') {
					attr = this.translateGender.transform(person[col]);
				}
				if (this.contains(attr, value)) {
					data.push(person);
					break;
				}
			}
		})
		this.count = data.length;
		this.filteredData = data;
		this.emitFilteredData.emit(this.filteredData);
	}

	getAdvancedFilteredData() {
		this.searchInput.reset();
		this.filteredData = this.dataSource;
		this.displayedColumns.forEach((col: string) => {
			const control: AbstractControl = this.advancedSearchInput.controls[col];
			if (control.value) {
				this.filteredData = this.filteredData.filter(
					(person: Person) => {
						let attr: string = person[col];
						if (col === 'gender') {
							attr = this.translateGender.transform(person[col]);
						}
						return this.contains(attr, control.value)
					}
				);
			}
		});
		this.emitFilteredData.emit(this.filteredData);
	}

	resetSearch(): void {
		this.filteredData = [];
		this.searchInput.reset();
		this.advancedSearchInput.reset();
		this.emitFilteredData.emit();
	}

	contains(valueFrom: string | number, searchValue: string): boolean {
		if (!searchValue) {
			return false;
		}
		return String(valueFrom).toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
	}
}
