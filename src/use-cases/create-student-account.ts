import { Request,Response } from "express";
import { Student } from "../entities/estutend";
import { CreateStudentAccountRepository } from "../repositories/implementatios/create-stutend-account";


type CreateStudentAccountUseCaseProps = {
  email: string;
  password: string;
  avatarUrl: string;
}


export class CreateStudentAccountUseCase {
  constructor(
    private createStudentAccountRespository: CreateStudentAccountRepository,
  ){}
  async execute(props: CreateStudentAccountUseCaseProps) {

    const studentAlredyExists = await this.createStudentAccountRespository.findByEmail(props.email);

    if(studentAlredyExists?.id){
      throw new Error("student already existe");
    }

    const student = Student.create({
      email: props.email,
      password: props.password,
      avatarUrl: props.avatarUrl,
    });


    await this.createStudentAccountRespository.create({
      avatarUrl: student.props.avatarUrl!,
      createAt: student.props.createAt!,
      email: student.props.email,
      id: student.id!,
      password: student.props.password,
    })
  }
}