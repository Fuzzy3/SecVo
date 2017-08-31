import {Question} from "./question.model";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Subscription} from "rxjs/Subscription";

import {DataStorageService} from "./data-storage.service";

@Injectable()
export class QuestionFeedService {
  questionsChanged = new Subject<Question[]>();

  constructor() {}

  /*private allQuestions: Question[] = [new Question(
      'Hvilken Disney er bedst?',
      ['Skønheden og udyret', 'Tornerose', 'Frozen', 'Snehvide og de syv små dværge', 'Askepot' ]),
    new Question(
      'Hvem skal være præsident næste gang?',
      ['Obama', 'Trump', 'Clinton'])
  ];

  setQuestionFeed(questions: Question[]) {
    this.allQuestions = questions;
    console.log(questions);
    this.questionsChanged.next(this.allQuestions);
  }

  getAllQuestions() {
    //this.dataStorageService.getAllQuestions();
  }*/
}
