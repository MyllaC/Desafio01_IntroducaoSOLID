import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const userIDAlreadyExists = this.usersRepository.findById(user_id);

    if (!userIDAlreadyExists.admin) {
      throw new Error("Only admins can access the list.");
    }

    const allUsers = this.listAllUsersUseCase.execute()
    return response.json(allUsers);
}

export { ListAllUsersController };
