import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Question} from "./question.model";
import {DataStorageService} from "./data-storage.service";

@Injectable()
export class QuestionService {
  constructor(private dataStorageService: DataStorageService) {}

  askedQuestion : Question;

  submitQuestion () {

  }

  getAskedQuestion() {
    return this.askedQuestion
  }

  addQuestion(newQuestion: Question) {
    this.askedQuestion = newQuestion;
    this.dataStorageService.storeQuestion(this.askedQuestion)
      /*.subscribe(
        (response: Response) => {
          console.log(response);
        }
      )*/;
  }
}
