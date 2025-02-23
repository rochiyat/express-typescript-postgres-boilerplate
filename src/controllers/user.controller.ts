import { Request, Response } from 'express';
import { UserService, userService } from '../services/user.service';

export function getUsers(req: Request, res: Response) {
  const users = userService.getUsers();
  res.json(users);
}

export function getUser(req: Request, res: Response) {
  const user = userService.getUserById(req.params.id);
  res.json(user);
}

export function createUser(req: Request, res: Response) {
  const user = userService.createUser(req.body);
  res.json(user);
}

export function updateUser(req: Request, res: Response) {
  const user = userService.updateUser(req.params.id, req.body);
  res.json(user);
}

export function deleteUser(req: Request, res: Response) {
  const user = userService.deleteUser(req.params.id);
  res.json(user);
}

export function getUserProjects(req: Request, res: Response) {
  const projects = userService.getUserProjects(req.params.id);
  res.json(projects);
}

export function getUserRoles(req: Request, res: Response) {
  const roles = userService.getUserRoles(req.params.id);
  res.json(roles);
}

export function getUserPhones(req: Request, res: Response) {
  const phones = userService.getUserPhones(req.params.id);
  res.json(phones);
}

export function getUserAddresses(req: Request, res: Response) {
  const addresses = userService.getUserAddresses(req.params.id);
  res.json(addresses);
}
