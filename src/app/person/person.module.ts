import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";

import { PersonComponent } from "./person.component";
import { PersonGeneratorComponent } from "./components/person-generator/person-generator.component";
import { PersonListComponent } from "./components/person-list/person-list.component";
import { PersonRoutingModule } from "./person-routing.module";
import { PersonService } from "./services/person.service";
import { TranslateGenderPipe } from './components/person-list/translate-gender.pipe';
import { SearchComponent } from './components/search/search.component';

@NgModule({
	declarations: [
		PersonComponent,
		PersonListComponent,
		PersonGeneratorComponent,
		SearchComponent,
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
