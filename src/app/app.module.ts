import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TranslatorComponent } from './translator/translator.component';
import { ConjugationTableComponent } from './conjugation-table/conjugation-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslatorComponent,
    ConjugationTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
