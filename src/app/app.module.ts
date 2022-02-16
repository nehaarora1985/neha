import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { CreateStudentsComponent } from './create-students/create-students.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    CreateStudentsComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
