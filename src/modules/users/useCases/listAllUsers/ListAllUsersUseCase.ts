import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  execute(user_id: any): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user || !user.admin) return [];
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
