import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    const users = this.listAllUsersUseCase.execute(user_id);
    if (users.length === 0) {
      return response
        .status(400)
        .json({ message: "Only users admin can access." });
    }
    return response.json(users);
  }
}

export { ListAllUsersController };
