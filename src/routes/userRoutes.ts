import { Router } from 'express';
import { UserController } from '../controller/UserController';

const userController = new UserController();
const userRoutes = Router();

userRoutes.get('/', userController.all);

userRoutes.get('/:id', userController.one);

userRoutes.post('/', userController.save);

userRoutes.put('/:id', userController.update);

userRoutes.delete('/:id', userController.remove);

export default userRoutes;
