import { inject, injectable } from 'tsyringe';
import IUserDTO from '../dto/IUserDTO';
import { User } from '../entity/User';
import { IUserRepository } from '../repository/IUserRepository';
import ShowUserService from './ShowUserService';

@injectable()
export default class UpdateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async run(id: string, { cpf, ...rest }: IUserDTO): Promise<User> {
    const showUserService = new ShowUserService(this.userRepository);
    const oldUser = await showUserService.run(id);

    const checkCpfExists = await this.userRepository.listByCpf(cpf);
    if (checkCpfExists && checkCpfExists.id !== oldUser.id) {
      throw console.error(`Usuário com CPF ${cpf} já existe`);
    }

    Object.assign(oldUser, { cpf, ...rest });
    const user = await this.userRepository.save(oldUser);
    return user;
  }
}
