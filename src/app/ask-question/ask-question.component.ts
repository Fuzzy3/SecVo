import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms'
import {QuestionsComponent} from "../questions/questions.component";
import {QuestionService} from "../shared/question.service";
import {Question} from "../shared/question.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {

  askQuestionForm: FormGroup;

  constructor(private questionService : QuestionService,
              private router: Router) {}

  ngOnInit() {
    this.askQuestionForm = new FormGroup({
      'question': new FormControl(null, Validators.required),
      'answers' : new FormArray([new FormControl(null, Validators.required), new FormControl(null, Validators.required)])
    });
  }

  onAddAnswer(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.askQuestionForm.get('answers')).push(control);
  }

  onRemoveAnswer(){
    let removeIndex: number = (<FormArray>this.askQuestionForm.get('answers')).length;
    if (removeIndex > 2) {
      (<FormArray>this.askQuestionForm.get('answers')).removeAt(removeIndex-1);
    }
  }

  onSubmit() {
    const question: string = this.askQuestionForm.get('question').value;
    const answers : string[] = this.askQuestionForm.get('answers').value;
    const stats : number[] = [];
    let newQuestion : Question = new Question(question, answers, stats);
    this.questionService.addQuestion(newQuestion);
    this.router.navigate(['/questions']);
  }

}
