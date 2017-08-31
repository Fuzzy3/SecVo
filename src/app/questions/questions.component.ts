import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Question} from '../shared/question.model';
import {QuestionService} from "../shared/question.service";
import {QuestionFeedService} from "../shared/questionFeed.service";
import {Subscription} from "rxjs/Subscription";
import {DataStorageService} from "../shared/data-storage.service";
import {FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit, OnChanges {
  questionFeed: Question[]
  questionFireFeed: FirebaseListObservable<Question[]>;
  questionSingle: FirebaseObjectObservable<Question>;

  //subscription: Subscription;

  constructor(private dataStorageService: DataStorageService,
              //private questionFeedService: QuestionFeedService
              ) { }

  ngOnInit() {
    /*console.log("Test1");
    this.subscription = this.questionFeedService.questionsChanged
      .subscribe(
        (questions: Question[]) => {
          console.log("HELLO");
          this.questionFeed = questions;
        }
      )
    this.dataStorageService.getAllQuestions();*/
    /*this.dataStorageService.getAllQuestions()
      .subscribe(
        data => {
          this.questionFeed = data.reverse();
        }
      );*/

    this.questionFireFeed = this.dataStorageService.getAllQuestions();
    this.questionSingle = this.questionFireFeed.elementAt[1]
  }

  ngOnChanges() {
    this.questionFireFeed = this.dataStorageService.getAllQuestions();
    /*
    this.dataStorageService.getAllQuestions()
      .subscribe(
        data => {
          this.questionFeed = data.reverse();
        }
      );*/
  }

  /*ngOnDestroy() {
    this.subscription.unsubscribe();
  }*/
}
