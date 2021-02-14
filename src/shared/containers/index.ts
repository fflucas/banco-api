import { container } from 'tsyringe';
import UserRepositoryImpl from '../../repository/Impl/UserRepositoryImpl';
import { IUserRepository } from '../../repository/IUserRepository';

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepositoryImpl
);

export default container;
