import { Student } from "@prisma/client";
import { Request,Response } from "express";
import { CreateStudentAccountUseCase } from "../use-cases/create-student-account";

type CreateStudentAccountControllerRequest = {
  avatarUrl: string;
  email: string;
  password: string;
}

export class CreateStudentAccountController {
  constructor(
    private createStudentAccountUseCase: CreateStudentAccountUseCase
  ){}
  async handler(request: Request,response: Response) {
    const student = request.body as CreateStudentAccountControllerRequest;

    await this.createStudentAccountUseCase.execute({
      avatarUrl: student.avatarUrl,
      email: student.email,
      password: student.password,
    })


    return response.status(202).send();
  }
}