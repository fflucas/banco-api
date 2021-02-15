import { inject, injectable } from 'tsyringe';
import IUserDTO from '../dto/IUserDTO';
import { User } from '../entity/User';
import { IUserRepository } from '../repository/IUserRepository';
import ShowUserService from './ShowUserService';

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async run({ cpf, ...rest }: IUserDTO): Promise<User> {
    const checkCpfExists = await this.userRepository.listByCpf(cpf);
    if (checkCpfExists) {
      throw console.error(`Usuário com CPF ${cpf} já existe`);
    }
    const user = await this.userRepository.create({ cpf, ...rest });
    return user;
  }
}
