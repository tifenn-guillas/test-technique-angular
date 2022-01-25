import { Component } from "@angular/core";

import { Observable, of } from "rxjs";

import { GenerationConfig, Person } from "./models";
import { PersonService } from "./services/person.service";

@Component({
	selector: "app-person",
	templateUrl: "./person.component.html",
	styleUrls: ["./person.component.scss"]
})
export class PersonComponent {
	displayedColumns: string[] = ["id", "firstName", "lastName", "gender", "email"];
	dataSource: Observable<Person[]>;
	filteredData: Person[];

	constructor(private personService: PersonService) { }

	generate(config: GenerationConfig): void {
		this.dataSource = this.personService.getPersons(config);
	}

	getData(): Observable<Person[]> {
		if (this.filteredData) {
			return of(this.filteredData);
		}
		return this.dataSource;
	}

	updateData(filteredData: Person[]): void {
		this.filteredData = filteredData;
	}
}
