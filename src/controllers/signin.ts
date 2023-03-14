import { Request, Response } from "express";




export class SignInController {
  hanlder(request: Request,response: Response){
    const { password, email } = request.body;

    
  }
}