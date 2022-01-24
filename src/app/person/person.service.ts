import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { GenerationConfig } from "./generation-config";
import { Person } from "./person";

@Injectable({
	providedIn: "root"
})
export class PersonService {
	constructor(private http: HttpClient) { }

	getPersons(config: GenerationConfig): Observable<Person[]> {
		return this.http.get<Person[]>("./assets/data/persons.json").pipe(
			map( response => {
				if (config.female && config.male) {
					return response.slice(0, config.count);
				} else if (!config.male) {
					return response
						.filter(person => person.gender !== "Male")
						.slice(0, config.count);
				} else if (!config.female) {
					return response
						.filter(person => person.gender !== "Female")
						.slice(0, config.count);
				}
			})
		);
	}
}
