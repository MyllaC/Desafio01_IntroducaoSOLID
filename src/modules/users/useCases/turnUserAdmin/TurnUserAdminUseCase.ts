import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userIDAlreadyExists = this.usersRepository.findById(user_id);

    if (!userIDAlreadyExists) {
      throw new Error("User do not exists");
    }

    const admin = this.usersRepository.turnAdmin(userIDAlreadyExists);

    return admin;
  }
}

export { TurnUserAdminUseCase };
