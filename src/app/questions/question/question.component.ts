import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Question} from "../../shared/question.model";
import {FirebaseObjectObservable} from "angularfire2/database";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questionVoted = new EventEmitter<number>();

  @Input() question : Question;
  @Input() questionIndex: number;
  //@Input() fireQuestion: FirebaseObjectObservable<Question>;

  resultsShown: boolean = false;

  toggleSeeResults() {
    let bool = this.resultsShown;
    this.resultsShown = bool === false ? true : false;
    console.log(this.questionIndex);
  }


  voteQuestion(answerIndex: number, questionIndex: number) {
    this.questionVoted.emit(answerIndex)
  }

  constructor() {
  }

  ngOnInit() {
  }

}
