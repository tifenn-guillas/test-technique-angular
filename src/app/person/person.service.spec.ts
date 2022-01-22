import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Person } from "./person";

import { PersonService } from "./person.service";
import { GenerationConfig } from './generation-config';

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

const DEFAULT_CONFIG = {
	count: 3,
	male: true,
	female: true
};

describe("PersonService", () => {
	let httpMock: HttpTestingController;
	let service: PersonService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule]
		});
		httpMock = TestBed.get(HttpTestingController);
		service = TestBed.get(PersonService);
	});

	afterEach(() => httpMock.verify());

	it("should be defined", () => {
		expect(service).toBeTruthy();
	});

	it("should provide a list of 3 persons", () => {
		const persons$ = service.getPersons(DEFAULT_CONFIG);
		persons$.subscribe(persons => {
			expect(persons).toBeDefined();
			expect(persons.length).toBe(3);
			expect(persons.map(p => p.id)).toEqual([1, 2, 3]);
		});

		// Call to the resource `persons.json` is not real, only sample `PERSONS` is returned for fake
		const getPersons = httpMock.expectOne("/assets/data/persons.json");
		getPersons.flush(PERSONS);
	});

	it("should provide a list of 2 persons", () => {
		const myConfig: GenerationConfig = { count: 2, female: true, male: true };
		const persons$ = service.getPersons(myConfig);
		persons$.subscribe(persons => {
			expect(persons).toBeDefined();
			expect(persons.length).toBe(2);
			expect(persons.map(p => p.id)).toEqual([1, 2]);
		});

		// Call to the resource `persons.json` is not real, only sample `PERSONS` is returned for fake
		const getPersons = httpMock.expectOne("/assets/data/persons.json");
		getPersons.flush(PERSONS);
	});

	it("should provide a list of male only", () => {
		const myConfig: GenerationConfig = { count: 3, female: false, male: true };
		const persons$ = service.getPersons(myConfig);
		persons$.subscribe(persons => {
			expect(persons).toBeDefined();
			expect(persons.length).toBe(2);
			expect(persons.map(p => p.id)).toEqual([1, 2]);
		});

		// Call to the resource `persons.json` is not real, only sample `PERSONS` is returned for fake
		const getPersons = httpMock.expectOne("/assets/data/persons.json");
		getPersons.flush(PERSONS);
	});

	it("should provide a list of female only", () => {
		const myConfig: GenerationConfig = { count: 3, female: true, male: false };
		const persons$ = service.getPersons(myConfig);
		persons$.subscribe(persons => {
			expect(persons).toBeDefined();
			expect(persons.length).toBe(1);
			expect(persons.map(p => p.id)).toEqual([3]);
		});

		// Call to the resource `persons.json` is not real, only sample `PERSONS` is returned for fake
		const getPersons = httpMock.expectOne("/assets/data/persons.json");
		getPersons.flush(PERSONS);
	});
});
