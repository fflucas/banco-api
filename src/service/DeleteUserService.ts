import { inject, injectable } from 'tsyringe';
import IUserDTO from '../dto/IUserDTO';
import { User } from '../entity/User';
import { IUserRepository } from '../repository/IUserRepository';
import ShowUserService from './ShowUserService';

@injectable()
export default class DeleteUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async run(id: string): Promise<User> {
    const showUserService = new ShowUserService(this.userRepository);
    const user = await showUserService.run(id);
    await this.userRepository.delete(user);
    return;
  }
}
