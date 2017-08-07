import { Component, OnInit } from '@angular/core';
import {Question} from './question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {


  questionFeed: Question[] = [
    new Question(
      'Hvilken Disney er bedst?',
      ['Skønheden og udyret', 'Tornerose', 'Frozen', 'Snehvide og de syv små dværge', 'Askepot' ]),
    new Question(
      'Hvem skal være præsident næste gang?',
    ['Obama', 'Trump', 'Clinton']),
    new Question(
      'Hvem var den bedste sanger?',
      ['Michael Jackson', 'Elvis Presley']
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
