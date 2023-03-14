import { Student } from "../entities/estutend";


type SigninUseCaseRequest = {
  email: string;
  password:string;
}

export class SigninUseCase {
  execute({email,password}:SigninUseCaseRequest){

    const estudent = Student.create({
      createAt: new Date(),
      email,
      password,
    })

    
  }
}