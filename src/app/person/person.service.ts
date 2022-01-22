import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { GenerationConfig } from "./generation-config";
import { Person } from "./person";
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: "root"
})
export class PersonService {
	constructor(private http: HttpClient) { }

	getPersons(config: GenerationConfig): Observable<Person[]> {
		return this.http.get<Person[]>("/assets/data/persons.json").pipe(
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
