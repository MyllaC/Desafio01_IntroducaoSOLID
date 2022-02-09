import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const userIDAlreadyExists = this.usersRepository.findById(user_id);

    if (!userIDAlreadyExists) {
      throw new Error("User do not exists");
    }

    const userProfile = this.showUserProfileUseCase.execute();

    return response.json(userProfile);
  }
}

export { ShowUserProfileController };
