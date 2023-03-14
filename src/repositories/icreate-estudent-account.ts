import { Student } from "@prisma/client";



export interface ICreateStudentAccount {
  findById: (id: string) => Promise<Student | null>;
  findByEmail: (email: string) => Promise<Student | null>;
  create: (props: Student) => Promise<void>;
}