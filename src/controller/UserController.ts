import { NextFunction, Request, Response } from 'express';
import container from '../shared/containers/index';
import CreateUserService from '../service/CreateUserService';
import DeleteUserService from '../service/DeleteUserService';
import ListAllUserService from '../service/ListAllUserService';
import ShowUserService from '../service/ShowUserService';
import UpdateUserService from '../service/UpdateUserService';

export class UserController {
  public async all(request: Request, response: Response): Promise<Response> {
    const listAllUsersService = container.resolve(ListAllUserService);
    const users = await listAllUsersService.run();
    return response.status(200).json(users);
  }

  public async one(request: Request, response: Response) {
    const { id } = request.params;
    const showUserService = container.resolve(ShowUserService);
    const user = await showUserService.run(id);
    return response.status(200).json(user);
  }

  public async save(request: Request, response: Response): Promise<Response> {
    const { name, cpf, password, phone_number, birthday } = request.body;
    const createUserService = container.resolve(CreateUserService);
    const user = await createUserService.run({
      name,
      cpf,
      password,
      phone_number,
      birthday,
    });
    return response.status(201).json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, cpf, password, phone_number, birthday } = request.body;
    const updateUserService = container.resolve(UpdateUserService);
    const user = await updateUserService.run(id, {
      name,
      cpf,
      password,
      phone_number,
      birthday,
    });
    return response.status(200).json(user);
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteUserService = container.resolve(DeleteUserService);
    const user = await deleteUserService.run(id);
    return response.status(200).json();
  }
}
