import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuestionsComponent } from './questions/questions.component';
import { UserComponent } from './user/user.component';
import {AppRoutingModule} from './app-routing.module';
import { QuestionComponent } from './questions/question/question.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import {QuestionService} from './shared/question.service';
import {ReactiveFormsModule} from '@angular/forms';
import {DataStorageService} from "./shared/data-storage.service";
import {QuestionFeedService} from "./shared/questionFeed.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase, AngularFireDatabaseModule} from 'angularfire2/database'
import {AngularFireAuthModule} from 'angularfire2/auth'
import {environment} from "../environments/environment";


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
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    DataStorageService,
    QuestionService,
    QuestionFeedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
