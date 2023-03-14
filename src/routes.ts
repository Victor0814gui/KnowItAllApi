import { Router } from "express";
import { SignInController } from "./controllers/signin";

const Routes = Router();

const signInController = new SignInController();


Routes.post("/signin",signInController.hanlder)


export { Routes }