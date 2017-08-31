export class Question {

  constructor(
    public questionText: string,
    public possibleAnswers: string[],
    public statsAnswers: number[]
  ) {}

}
