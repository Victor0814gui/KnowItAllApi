import { Entity } from "./entity";


type StudentProps = {
  password: string;
  email: string;
  createAt?: Date;
  avatarUrl?: string;
}  

export class Student extends Entity<StudentProps> {
  id?: string;
  props: StudentProps;

  private constructor(props: StudentProps,id?: string){
    super(props,id)
    this.id = id;
    this.props = props;
  } 

  static create(props: StudentProps){
    const student  = new Student({
      ...props,
      createAt: props.createAt ?? new Date(),
    });

    return student;
  }
}