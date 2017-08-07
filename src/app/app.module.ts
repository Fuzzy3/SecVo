import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuestionsComponent } from './questions/questions.component';
import { UserComponent } from './user/user.component';
import {AppRoutingModule} from './app-routing.module';
import { QuestionComponent } from './questions/question/question.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionsComponent,
    UserComponent,
    QuestionComponent,
    AskQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
