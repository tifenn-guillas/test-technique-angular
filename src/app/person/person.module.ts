import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";

import { PersonGeneratorComponent } from "./person-generator/person-generator.component";
import { PersonListComponent } from "./person-list/person-list.component";
import { PersonRoutingModule } from "./person-routing.module";
import { PersonService } from "./person.service";
import { TranslateGenderPipe } from './person-list/translate-gender.pipe';
import { SearchComponent } from './search/search.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';

@NgModule({
	declarations: [
		PersonListComponent,
		PersonGeneratorComponent,
		SearchComponent,
		AdvancedSearchComponent,
		TranslateGenderPipe
	],
	imports: [
		CommonModule,
		PersonRoutingModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatCheckboxModule,
		MatTableModule,
		ReactiveFormsModule
	]
})
export class PersonModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: PersonModule,
			providers: [
				PersonService
			]
		};
	}
}
