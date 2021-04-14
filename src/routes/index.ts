import { Router } from 'express';

import {
  postUser,
  getUsers,
  getOneUser,
  deleteUser,
  updateUser,
} from '../controllers/Users.Controller';

const UserRouter: Router = Router();

UserRouter.get('/user', (req,res)=>{
  res.json({
    name:'hello worldsh'
  })
});
UserRouter.post('/user', postUser);
UserRouter.put('/user/:userId', updateUser);
UserRouter.delete('/user/:userId', deleteUser);
UserRouter.get('/user/:id', getOneUser);

export default UserRouter;