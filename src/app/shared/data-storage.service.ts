import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Question} from "./question.model";
import {QuestionFeedService} from "./questionFeed.service";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {HttpClient} from "@angular/common/http";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";


@Injectable()
export class DataStorageService {
  questions: FirebaseListObservable<Question[]>;
  question: Question;

  constructor(private http: Http,
              private db: AngularFireDatabase,
              private questionFeedService: QuestionFeedService ) {}

  storeQuestion(question: Question) {
    console.log(question);
    this.questions = this.getAllQuestions();
    this.questions.push(question);
    /*const newQues = [question];
    return this.http.post('https://secvo-f0fef.firebaseio.com/questions.json', question);
    */
  }

  getAllQuestions(): FirebaseListObservable<Question[]> {
    return this.db.list('/questions', {
      query: {
        limitToLast: 25,
        orderByKey: true
      }
    })
  }





    /*this.http.get('https://secvo-f0fef.firebaseio.com/questions/-KsUiPahO5eyb47S8OO5.json')
      .map(
        (response : Response) => {
          const data = response.json();
          for (const question of data) {
            console.log(question);
          }
          return data;
        }
      )
      .subscribe(
        (data) => {
          console.log(data);
          //this.questionFeedService.setQuestionFeed(questions);
        }
      );*/


  /*getAllQuestions2() {
    this.http.get('https://secvo-f0fef.firebaseio.com/questions.json')
      .map(
        (response: Response) => {
          const questions: Question[] = response.json();
          for(let question of questions) {
            if(!questions['answers']) {
              console.log(question);
              question['answers'] = []
            }
          }
          return questions;
        }
      )
      .subscribe(
        (questions: Question[]) => {
          this.questionFeedService.setQuestionFeed(questions);
        }
      );
  }*/

}
