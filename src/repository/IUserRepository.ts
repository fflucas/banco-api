import IUserDTO from '../dto/IUserDTO';
import { User } from '../entity/User';

export interface IUserRepository {
  delete(data: User): Promise<void>;
  create(data: IUserDTO): Promise<User>;
  save(data: User): Promise<User>;
  listByCpf(cpf: string): Promise<User | undefined>;
  listOne(id: string): Promise<User | undefined>;
  listAll(): Promise<User[]>;
}
