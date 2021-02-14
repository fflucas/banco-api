import { inject, injectable } from 'tsyringe';
import { User } from '../entity/User';
import { IUserRepository } from '../repository/IUserRepository';

@injectable()
export default class ShowUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async run(id: string): Promise<User> {
    const user = await this.userRepository.listOne(id);
    if (!user) {
      throw console.error(`Usuário com id ${id} não encontrado`);
    }
    return user;
  }
}
