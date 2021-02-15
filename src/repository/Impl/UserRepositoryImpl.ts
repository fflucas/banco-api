import { getRepository, Repository } from 'typeorm';
import IUserDTO from '../../dto/IUserDTO';
import { User } from '../../entity/User';
import { IUserRepository } from '../IUserRepository';

export default class UserRepositoryImpl implements IUserRepository {
  private userRepository: Repository<User>;
  constructor() {
    this.userRepository = getRepository(User);
  }

  public async delete(data: User): Promise<void> {
    await this.userRepository.delete(data);
    return;
  }

  public async create(data: IUserDTO): Promise<User> {
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }

  public async save(data: User): Promise<User> {
    return this.userRepository.save(data);
  }

  public async listByCpf(cpf: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: cpf });
  }

  public async listOne(id: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: id });
  }

  public async listAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
