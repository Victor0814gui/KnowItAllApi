import { Entity } from "./entity";


type QuestionProps = {
  id: string;
  alternative: string;
}

type SubmissionProps = {
  questions: QuestionProps;
}


export class Submission extends Entity<SubmissionProps>{
  id?: string;
  props: SubmissionProps;

  private constructor(props: SubmissionProps, id?: string){
    super(props, id)
    this.props = props;
    this.id = id
  }

  static create(props: SubmissionProps){
    const submission = new Submission(props);

    return submission;
  }
}