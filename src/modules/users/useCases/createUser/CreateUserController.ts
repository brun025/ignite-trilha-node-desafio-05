import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { email, name } = request.body;

    const user = this.createUserUseCase.execute({ email, name });
    if (!user) {
      return response.status(400).json({ message: "E-mail already is taken." });
    }
    return response.status(201).json(user);
  }
}

export { CreateUserController };
