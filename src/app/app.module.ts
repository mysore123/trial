import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { RouterModule, Routes } from '@angular/router';
import { CongratsComponent } from './congrats/congrats.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'question', component:  QuestionComponent},
  { path: 'congrats', component: CongratsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    CongratsComponent
  ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
