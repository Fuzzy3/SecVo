import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionsComponent} from './questions/questions.component';
import {UserComponent} from './user/user.component';
import {AskQuestionComponent} from './ask-question/ask-question.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/questions', pathMatch: 'full'},
  { path: 'questions', component: QuestionsComponent },
  { path: 'user', component: UserComponent },
  { path: 'askquestion', component: AskQuestionComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
