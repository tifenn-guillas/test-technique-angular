import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { EMPTY, Observable } from "rxjs";
import { GenerationConfig } from "../generation-config";
import { Person } from "../person";
import { PersonService } from "../person.service";

@Component({
	selector: "app-search",
	templateUrl: "./search.component.html",
	styleUrls: ["./search.component.scss"]
})
export class SearchComponent {
	@Input() dataSource: Person[];
	@Output() criteria = new EventEmitter<string>()

	constructor() { }
}
