import { PrismaClient, Student } from "@prisma/client";
import { ICreateStudentAccount } from "../icreate-estudent-account";

const prisma = new PrismaClient();

export class CreateStudentAccountRepository implements ICreateStudentAccount {
  async findById(id: string) {
    const StudentAccountDataResponse = await prisma.student.findFirst({
      where: { id }
    })
    
    return StudentAccountDataResponse;
  }

  async findByEmail(email: string) {
    const StudentAccountDataResponse = await prisma.student.findFirst({
      where: { email }
    })
    
    return StudentAccountDataResponse;
  }
  
  
  async create(props: Student){
    prisma.student.create({
      data:{
        id: props.id!,
        avatarUrl: props.avatarUrl,
        createAt: props.createAt,
        email: props.email,
        password: props.password,
      }
    })
  }
}