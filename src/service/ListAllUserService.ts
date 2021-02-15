import { inject, injectable } from 'tsyringe';
import { User } from '../entity/User';
import { IUserRepository } from '../repository/IUserRepository';

@injectable()
export default class ListAllUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async run(): Promise<User[]> {
    return this.userRepository.listAll();
  }
}
